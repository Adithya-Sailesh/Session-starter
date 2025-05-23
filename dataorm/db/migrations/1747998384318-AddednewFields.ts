import { MigrationInterface, QueryRunner } from "typeorm";

export class AddednewFields1747998384318 implements MigrationInterface {
    name = 'AddednewFields1747998384318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "line2" character varying `);
        await queryRunner.query(`ALTER TABLE "address" ADD "house_no" character varying `);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employeeid" character varying `);
        await queryRunner.query(`ALTER TABLE "employee" ADD "date_of_joining" TIMESTAMP `);
        await queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer `);
        await queryRunner.query(`CREATE TYPE "public"."employee_department_enum" AS ENUM('ACTIVE', 'INACTIVE', 'PROBATION')`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "department" "public"."employee_department_enum" NOT NULL DEFAULT 'INACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "department"`);
        await queryRunner.query(`DROP TYPE "public"."employee_department_enum"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "date_of_joining"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employeeid"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "house_no"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "line2"`);
    }

}
