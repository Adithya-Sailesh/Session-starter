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
class EmployeeRepository {
    constructor(repostiory) {
        this.repostiory = repostiory;
    }
    create(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repostiory.save(employee);
        });
    }
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repostiory.find({
                relations: {
                    address: true
                }
            });
        });
    }
    findone(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repostiory.findOne({
                where: { id },
                relations: {
                    address: true
                }
            });
        });
    }
    ;
    update(id, employee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repostiory.save(Object.assign({ id }, employee));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repostiory.delete({ id });
        });
    }
}
exports.default = EmployeeRepository;
//# sourceMappingURL=employee.repostitorie.js.map