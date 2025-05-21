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
exports.AddedCascade1747823509393 = void 0;
class AddedCascade1747823509393 {
    constructor() {
        this.name = 'AddedCascade1747823509393';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "name" TO "delete_at"`);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "delete_at" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "address" DROP COLUMN "delete_at"`);
            yield queryRunner.query(`ALTER TABLE "address" ADD "delete_at" TIMESTAMP`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" DROP COLUMN "delete_at"`);
            yield queryRunner.query(`ALTER TABLE "address" ADD "delete_at" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "delete_at"`);
            yield queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "delete_at" TO "name"`);
        });
    }
}
exports.AddedCascade1747823509393 = AddedCascade1747823509393;
//# sourceMappingURL=1747823509393-added-cascade.js.map