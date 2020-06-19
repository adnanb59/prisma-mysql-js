# prisma-mysql-js

This is an implementation of the tutorial provided on the Prisma site for implementing Prisma in a new project using JavaScript and a MySQL database.<br/>
The link to the tutorial can be found [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-node-mysql).

The MySQL database schema is defined by this [schema](./schema.sql) and it is assumed you already created the tables in an existing database.

Before running this tutorial, there is a minor bit of setup required.
> Any Prisma commands that are used in setup **HAVE** to be run while inside the prisma/ directory.

The Prisma schema (named prisma.schema) is a configuration file that Prisma uses to set up the project to communicate with your database. In this project, you'll find it [here](./prisma/prisma.schema)
It consists of three blocks:
  - datasource (which specifies the database that will be used)
  - generator (which specifies the Prisma client that the code will use)
  - data model (which consists of different data models your application uses - maps with your database schema)

First thing that needs to be done is to add a data source to the project.
To do so, add a url in the url property in the datasource block.
[Here](https://www.prisma.io/docs/reference/database-connectors/mysql) is what a MySQL url would look like.
If you would rather not hardcode the url into the file, you can use an `.env` file in the prisma/ directory as I have done here with the DATABASE_URL variable.
>I encountered an issue with using a global .env file in another project and feel it is important to mention [here](https://github.com/adnanb59/graphql-node#a-note-on-environment-variables-and-prisma) even if this project is small scale such that you might not need environment variables aside from the URL.

Secondly, after installing dependencies, run `npx prisma generate`.
This will generate the Prisma client that the code will utilize to access the database.
For this project, a JavaScript client will be created (as specified in the generator block in the provider property).
You could also use a TypeScript client for TS projects by changing `prisma-client-js` to `prisma-client-ts`.

I've already had the data model created in Prisma based on the database schema.
However if you want to make changes to your schema and then reflect those changes in the model, you need to use Prisma [introspection](https://www.prisma.io/docs/reference/tools-and-interfaces/introspection).
Prisma introspection allows Prisma to go through your DB to create it's associated data models (it's how I did it for this project).
To do so, run the command `npx prisma introspect`.
You are also able to work the other way around (generate your database schema from your created data models), you would first need to create data models in the Prisma schema and do a Prisma migration.
[Here](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/models/) is a reference on Prisma data models.
After writing your models, to migrate, run the following commands:
```
npx prisma migrate save --experimental
npx prisma migrate up --experimental
```
[Migration](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate) is experimental so you might run into issues of your DB not reflecting your data models exactly.
I found some issues doing so in another project (even resorting to dropping tables and deleting files that were generated while doing a migration), which can be annoying to deal with.
However, unless you play around with the data models in this project, you won't run into those problems.

The tutorial mentioned in the beginning provides more info in going through steps to understand the code.

If you just want to use the application, refer to `index.js` file for specific functions:
  - createUser
  - updateUser
  - displayUsers

Comment/uncomment functions based on what functions you want to run.

To run the application, use the command `node index.js`. You can confirm results by checking your output or checking the tables in the database.
