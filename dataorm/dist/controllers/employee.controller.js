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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const CreateEmployeeDto_1 = require("../dto/CreateEmployeeDto");
const authorizationMiddleware_1 = require("../authorizationMiddleware");
const UpdateEmployee_dto_1 = require("../dto/UpdateEmployee.dto");
class EmployeeControlers {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.updateEmployee = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            // try{
            //     const id=req.body.id
            //     const name=req.body.name
            //     const email=req.body.email
            //     const age=req.body.age
            //     const role=req.body.role
            //     const address=req.body.address  
            //     const password=req.body.password
            //     await this.employeeService.updateEmployee(id,name,email,age,role,password,address);
            //     res.status(201).send("Updated")
            // }
            // catch(err){
            //     next(err)
            // }
            try {
                const updateEmployeeDto = (0, class_transformer_1.plainToInstance)(UpdateEmployee_dto_1.UpdateEmployeeDto, req.body);
                const errors = yield (0, class_validator_1.validate)(updateEmployeeDto);
                if (errors.length > 0) {
                    console.log(JSON.stringify(errors));
                    throw new httpException_1.default(400, JSON.stringify(errors));
                }
                const update = yield this.employeeService.updateEmployee(updateEmployeeDto.id, updateEmployeeDto.email, updateEmployeeDto.name, updateEmployeeDto.age, updateEmployeeDto.role, updateEmployeeDto.dept_id, updateEmployeeDto.password, updateEmployeeDto.address);
                res.status(201).send("updated");
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.employeeService.deleteEmployee(req.params.id);
            res.status(200).send("Deleted");
        });
        router.post("/", authorizationMiddleware_1.AuthorizationMiddleware, this.createEmployee.bind(this));
        router.get("/", this.getAllEmployees.bind(this));
        router.get("/:id", this.getEmloyeeById.bind(this));
        router.put("/", authorizationMiddleware_1.AuthorizationMiddleware, this.updateEmployee);
        router.delete("/:id", authorizationMiddleware_1.AuthorizationMiddleware, this.deleteEmployee);
    }
    createEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // try{
            //     const name=req.body.name;
            //     const email=req.body.email;
            //     const age=req.body.age
            //     const address=req.body.address;
            //     if(!isEmail(email)){
            //         throw new HttpException(412,"Not valid email");
            //     }
            //     const employee= await this.employeeService.createEmployee(email,name,age,address);
            //     res.status(201).send(employee)
            // }
            try {
                const createEmployeeDto = (0, class_transformer_1.plainToInstance)(CreateEmployeeDto_1.CreateEmployeeDto, req.body);
                const errors = yield (0, class_validator_1.validate)(createEmployeeDto);
                if (errors.length > 0) {
                    console.log(JSON.stringify(errors));
                    throw new httpException_1.default(400, JSON.stringify(errors));
                }
                const savedEmployee = yield this.employeeService.createEmployee(createEmployeeDto.email, createEmployeeDto.name, createEmployeeDto.age, createEmployeeDto.role, createEmployeeDto.dept_id, createEmployeeDto.password, createEmployeeDto.address);
                res.status(201).send(savedEmployee);
            }
            catch (error) {
                next(error);
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