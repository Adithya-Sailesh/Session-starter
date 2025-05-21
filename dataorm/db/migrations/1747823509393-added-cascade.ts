import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCascade1747823509393 implements MigrationInterface {
    name = 'AddedCascade1747823509393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "name" TO "delete_at"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "delete_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "delete_at"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "delete_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "delete_at"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "delete_at" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "delete_at"`);
        await queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "delete_at" TO "name"`);
    }

}
