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
class EmployeeControlers {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.updateEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const name = req.body.name;
            const email = req.body.email;
            yield this.employeeService.updateEmployee(id, name, email);
            res.status(201).send("Updated");
        });
        this.deleteEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.employeeService.deleteEmployee(req.params.id);
            res.status(201).send("Deleted");
        });
        router.post("/", this.createEmployee.bind(this));
        router.get("/", this.getAllEmployees.bind(this));
        router.get("/:id", this.getEmloyeeById.bind(this));
        router.put("/:id", this.updateEmployee);
        router.delete("/:id", this.deleteEmployee);
    }
    createEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const email = req.body.email;
            const employee = yield this.employeeService.createEmployee(email, name);
            res.status(201).send(employee);
        });
    }
    getAllEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employess = yield this.employeeService.getAllEmployees();
            res.status(201).send(employess);
        });
    }
    getEmloyeeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeService.getEmployeeById(req.params.id);
            res.status(201).send(employee);
        });
    }
}
exports.default = EmployeeControlers;
//# sourceMappingURL=employee.controller.js.map