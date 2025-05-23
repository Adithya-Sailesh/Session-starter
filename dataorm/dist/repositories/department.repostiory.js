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
class DeparmentRepository {
    constructor(repostiory) {
        this.repostiory = repostiory;
    }
    create(department) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repostiory.save(department);
        });
    }
    findbyid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repostiory.findOne({
                where: { id },
                relations: {
                    employee: true
                }
            });
        });
    }
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repostiory.find({
                relations: {
                    employee: true
                }
            });
        });
    }
    update(id, department) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repostiory.save(Object.assign({ id }, department));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dept = yield this.repostiory.findOne({ where: { id } });
            if (dept) {
                yield this.repostiory.softDelete({ id });
            }
        });
    }
}
exports.default = DeparmentRepository;
//# sourceMappingURL=department.repostiory.js.map