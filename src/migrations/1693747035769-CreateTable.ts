import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1693747035769 implements MigrationInterface {
    name = 'CreateTable1693747035769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ethereum_transactions" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "blockNumber" character varying NOT NULL, "from" character varying NOT NULL, "to" character varying NOT NULL, "value" character varying NOT NULL, "gas" character varying NOT NULL, "gasPrice" character varying NOT NULL, "nonce" character varying NOT NULL, CONSTRAINT "PK_441d0dcbeba63a85d50664fb371" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ethereum_transactions"`);
    }

}
