"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddednewFields1747998384318 = void 0;
class AddednewFields1747998384318 {
    constructor() {
        this.name = 'AddednewFields1747998384318';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" ADD "line2" character varying `);
            yield queryRunner.query(`ALTER TABLE "address" ADD "house_no" character varying `);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "employeeid" character varying `);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "date_of_joining" TIMESTAMP `);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer `);
            yield queryRunner.query(`CREATE TYPE "public"."employee_department_enum" AS ENUM('ACTIVE', 'INACTIVE', 'PROBATION')`);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "department" "public"."employee_department_enum" NOT NULL DEFAULT 'INACTIVE'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "department"`);
            yield queryRunner.query(`DROP TYPE "public"."employee_department_enum"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "date_of_joining"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employeeid"`);
            yield queryRunner.query(`ALTER TABLE "address" DROP COLUMN "house_no"`);
            yield queryRunner.query(`ALTER TABLE "address" DROP COLUMN "line2"`);
        });
    }
}
exports.AddednewFields1747998384318 = AddednewFields1747998384318;
//# sourceMappingURL=1747998384318-AddednewFields.js.map