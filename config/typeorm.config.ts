import { DataSource } from "typeorm";
import { TransactionEntity } from '../src/entities/transaction.entity';
import { CreateTable1693747035769 } from "../src/migrations/1693747035769-CreateTable";

export default new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT as string) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DATABASE || 'postgres',
    entities: [TransactionEntity],
    migrations: [CreateTable1693747035769]
}); 