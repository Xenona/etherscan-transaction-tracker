import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from '../entities/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(TransactionEntity)
        private readonly transactionRepository: Repository<TransactionEntity>,
    ) {}

    async saveTransactions(transactions: any[]) {
        const transactionEntities = transactions.map((t) =>
            this.transactionRepository.create({
                hash: t.hash,
                blockNumber: t.BlockNumber,
                from: t.from, 
                to: t.to,
                value: t.value,
                gas: t.gas,
                gasPrice: t.gasPrice,
                nonce: t.nonce
        })
        );

        await this.transactionRepository.save(transactionEntities);
    }

    async calculateBiggestBalanceChange(): Promise<string> {

        const transactions = await this.transactionRepository.find({
            order: {
                id: 'DESC',  
            },
            take: 100,  
        });


        let mostSignificantTransaction: TransactionEntity | null = null;
        let mostSignificantChange: number = 0;

        for (const transaction of transactions) {
            if (Number(transaction.value) > mostSignificantChange) {
                mostSignificantChange = Number(transaction.value);
                mostSignificantTransaction = transaction;
            }
        }
        return mostSignificantTransaction.to
    }
}