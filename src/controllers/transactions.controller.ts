import { Controller, Get } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';

@Controller('/transactions')
export class TransactionsController {
    constructor(private readonly transactionService: TransactionService) {};

    @Get('/most-significant-balance-change')
    async getMostSignificantBalanceChange() {
        const result: string = await this.transactionService.calculateBiggestBalanceChange();
        return result;
    }
}
