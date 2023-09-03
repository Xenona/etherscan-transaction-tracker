import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ethereum_transactions')  
export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hash: string;

    @Column({ type: 'varchar' })  
    blockNumber: string;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column({ type: 'varchar' })  
    value: string;

    @Column({ type: 'varchar' }) 
    gas: string;

    @Column({ type: 'varchar' })  
    gasPrice: string;

    @Column({ type: 'varchar' })  
    nonce: string;
}
