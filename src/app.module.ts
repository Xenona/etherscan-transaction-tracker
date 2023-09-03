import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { EthereumService } from './modules/ethereum/ethereum.service';
import { CronService } from './modules/cron/cron.service';
import { TransactionService } from './services/transaction.service';
import { TransactionEntity } from './entities/transaction.entity';
import databaseConfig from 'config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './controllers/transactions.controller';
import { ScheduleModule } from '@nestjs/schedule';

@Module({

    controllers: [TransactionsController],
    providers: [EthereumService, CronService, TransactionService, TransactionEntity],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([TransactionEntity]),
        ScheduleModule.forRoot() 
    ]
})
export class AppModule {}
