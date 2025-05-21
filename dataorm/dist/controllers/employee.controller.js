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
const httpException_1 = __importDefault(require("../exception/httpException"));
const emailvalidator_1 = require("../validators/emailvalidator");
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
    createEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.name;
                const email = req.body.email;
                const age = req.body.age;
                const address = req.body.address;
                if (!(0, emailvalidator_1.isEmail)(email)) {
                    throw new httpException_1.default(412, "Not valid email");
                }
                const employee = yield this.employeeService.createEmployee(email, name, age, address);
                res.status(201).send(employee);
            }
            catch (err) {
                console.error(err);
                next(err);
            }
        });
    }
    getAllEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employess = yield this.employeeService.getAllEmployees();
            res.status(201).send(employess);
        });
    }
    getEmloyeeById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield this.employeeService.getEmployeeById(req.params.id);
                if (!employee) {
                    throw new httpException_1.default(404, "notfound");
                }
                res.status(201).send(employee);
            }
            catch (err) {
                //res.status(404).send("notfound")
                console.log(err);
                next(err);
            }
        });
    }
}
exports.default = EmployeeControlers;
//# sourceMappingURL=employee.controller.js.map