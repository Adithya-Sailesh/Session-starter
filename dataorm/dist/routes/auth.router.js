"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const auth_service_1 = require("../service/auth.service");
const auth_controllers_1 = __importDefault(require("../controllers/auth.controllers"));
const employee_route_1 = require("../routes/employee.route");
const express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
const authService = new auth_service_1.AuthService(employee_route_1.employeeService);
new auth_controllers_1.default(authService, exports.authRouter);
//# sourceMappingURL=auth.router.js.map