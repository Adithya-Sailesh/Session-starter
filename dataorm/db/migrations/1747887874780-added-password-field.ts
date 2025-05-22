import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPasswordField1747887874780 implements MigrationInterface {
    name = 'AddedPasswordField1747887874780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying`);
        await queryRunner.query(`update "employee" SET "password" = 'password' where "password" IS NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "password" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
    }

}
