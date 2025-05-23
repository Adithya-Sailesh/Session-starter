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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
const department_entity_1 = __importDefault(require("../entities/department.entity"));
const httpException_1 = __importDefault(require("../exception/httpException"));
const logger_service_1 = require("./logger.service");
class DepartmentService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
        this.logger = logger_service_1.LoggerService.getInstance(DepartmentService.name);
    }
    createDept(name) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("Dept Created");
            const dept = new department_entity_1.default();
            dept.deptname = name;
            return this.departmentRepository.create(dept);
        });
    }
    getAlldept() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("All Dept fetched");
            return this.departmentRepository.findMany();
        });
    }
    getDeptbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dept = this.departmentRepository.findbyid(id);
            if (!dept) {
                this.logger.error("Dept Not Found");
                throw new httpException_1.default(401, "Dept not found");
            }
            return dept;
        });
    }
    updateDepartment(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let existingDept = yield this.departmentRepository.findbyid(id);
            if (!existingDept) {
                throw new httpException_1.default(401, "Department Not found");
            }
            existingDept.deptname = name;
            yield this.departmentRepository.update(id, existingDept);
        });
    }
    deleteDepartment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dept = yield this.departmentRepository.findbyid(id);
            if (!dept) {
                this.logger.error("Dept Not Found");
                throw new httpException_1.default(401, "Department Not found");
            }
            yield this.departmentRepository.delete(id);
        });
    }
}
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map