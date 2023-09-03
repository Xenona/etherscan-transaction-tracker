import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TransactionEntity } from '../src/entities/transaction.entity';
import { CreateTable1693747035769 } from '../src/migrations/1693747035769-CreateTable';

const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DATABASE || 'postgres',
    entities: [TransactionEntity],
    migrations: [ CreateTable1693747035769]
};

export default databaseConfig;