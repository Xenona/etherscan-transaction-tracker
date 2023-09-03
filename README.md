# etherscan-transaction-tracker

Solving test case using back-end technologies such as Node.js, Nest.js and Postgresql.

To build and run this project, it's necessary to:
1. Clone the repository.
2. Install `PostgreSQL` and run the service.
3. Create a database.
4. Edit `.env` file .
5. Check out the package.json and install all packages in `"dependencies"` field. Additionally you may need `typescript`.
6. Run `typeorm-ts-node-commonjs migration:run -d typeorm.config.ts` to setup the database.
7. Run the server with `npm start`