# prisma-mysql-js

This is an implementation of the tutorial provided on the Prisma site for implementing Prisma in a new project using JavaScript and a MySQL database.<br/>
The link to the tutorial can be found [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-node-mysql).

The MySQL database schema is defined by this [schema](./schema.sql) and it is assumed you already created the tables in an already database.

Before running this tutorial, add the MySQL database url to the [Prisma schema](./prisma/schema.prisma) in the datasource block.
If you would rather not hardcode the url into the file, you can use an `.env` file.
In this code, I use the `.env` approach labelled as `DATABASE_URL`.

The aforementioned tutorial provides more info in going through steps to understand the code.

If you just want to use the application, refer to `index.js` file for specific functions:
  - createUser
  - updateUser
  - displayUsers

Comment/uncomment functions based on what functions you want to run.

To run the application, use the command `node index.js`. You can confirm results by checking your output or checking the tables in the database.
