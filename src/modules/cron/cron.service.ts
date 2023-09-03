import { Injectable } from '@nestjs/common';
import { EthereumService } from '../ethereum/ethereum.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TransactionService } from '../../services/transaction.service';

@Injectable()
export class CronService {
    constructor(
        private readonly ethereumService: EthereumService,
        private readonly transactionService: TransactionService
    ) {}

    @Cron(CronExpression.EVERY_MINUTE)
    async handleCron() {
        const firstBlock: number = 17583000;
        const lastBlock: number = await this.ethereumService.getLastBlock();

        for (let i: number = firstBlock; i <= lastBlock; i++) {
            console.log(i)
            const transactions = await this.ethereumService.getBlockTransactions(i);
            await this.transactionService.saveTransactions(transactions);
        }
    }
}
