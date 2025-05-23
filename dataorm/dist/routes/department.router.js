"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentService = exports.departmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const department_repostiory_1 = __importDefault(require("../repositories/department.repostiory"));
const data_source_1 = __importDefault(require("../db/data-source"));
const department_entity_1 = __importDefault(require("../entities/department.entity"));
const department_service_1 = require("../service/department.service");
const department_controllers_1 = require("../controllers/department.controllers");
exports.departmentRouter = express_1.default.Router();
const departmentRepository = new department_repostiory_1.default(data_source_1.default.getRepository(department_entity_1.default));
exports.departmentService = new department_service_1.DepartmentService(departmentRepository);
new department_controllers_1.DeparmentContollers(exports.departmentService, exports.departmentRouter);
//# sourceMappingURL=department.router.js.map