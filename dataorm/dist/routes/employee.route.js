"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = void 0;
const express_1 = __importDefault(require("express"));
const employee_repostitorie_1 = __importDefault(require("../repositories/employee.repostitorie"));
const data_source_1 = __importDefault(require("../db/data-source"));
const employee_entity_1 = __importDefault(require("../entities/employee.entity"));
const employee_service_1 = __importDefault(require("../service/employee.service"));
const employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
const department_repostiory_1 = __importDefault(require("../repositories/department.repostiory"));
const department_entity_1 = __importDefault(require("../entities/department.entity"));
const employeeRouter = express_1.default.Router();
const employeeRepository = new employee_repostitorie_1.default(data_source_1.default.getRepository(employee_entity_1.default));
const departmentRepository = new department_repostiory_1.default(data_source_1.default.getRepository(department_entity_1.default));
exports.employeeService = new employee_service_1.default(employeeRepository, departmentRepository);
new employee_controller_1.default(exports.employeeService, employeeRouter);
exports.default = employeeRouter;
//# sourceMappingURL=employee.route.js.map