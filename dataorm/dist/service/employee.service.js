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
const adress_entity_1 = __importDefault(require("../entities/adress.entity"));
const employee_entity_1 = __importDefault(require("../entities/employee.entity"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const httpException_1 = __importDefault(require("../exception/httpException"));
const logger_service_1 = require("./logger.service");
class EmployeeService {
    constructor(employeeRepository, departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.logger = logger_service_1.LoggerService.getInstance(EmployeeService.name);
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("Employes Found");
            return this.employeeRepository.findMany();
        });
    }
    // async getEmployeeById(id:number):Promise<Employee>{
    //     let employee=await this.employeeRepository.findone(id)
    //     if(!employee){
    //         throw new error("User not found") 
    //     }
    //     catch{
    //         return employee
    //     }
    // }
    getEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let employee = yield this.employeeRepository.findone(id);
            if (!employee) {
                throw new Error("Employee not found");
            }
            return employee;
        });
    }
    createEmployee(email, name, age, role, dept_id, password, address) {
        return __awaiter(this, void 0, void 0, function* () {
            // const emp=new Employee();
            // emp.name=name
            // emp.email=email
            // emp.age=age
            // emp.address=address
            const newAddress = new adress_entity_1.default();
            newAddress.line1 = address.line1;
            newAddress.pincode = address.pincode;
            const newEmployee = new employee_entity_1.default();
            newEmployee.email = email;
            newEmployee.name = name;
            newEmployee.age = age;
            newEmployee.role = role;
            const dept = yield this.departmentRepository.findbyid(dept_id);
            if (!dept) {
                throw new httpException_1.default(401, "Department Not Found");
            }
            newEmployee.department = dept;
            newEmployee.password = yield bcrypt_1.default.hash(password, 12);
            newEmployee.address = newAddress;
            return this.employeeRepository.create(newEmployee);
        });
    }
    updateEmployee(id, email, name, age, role, dept_id, password, address) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("Updating Employee");
            const existingEmployee = yield this.employeeRepository.findone(id);
            const dept = yield this.departmentRepository.findbyid(dept_id);
            if (!dept) {
                throw new httpException_1.default(401, "Department not found");
            }
            if (existingEmployee) {
                // const newEmployee=new Employee();
                existingEmployee.name = name;
                existingEmployee.email = email;
                existingEmployee.age = age;
                existingEmployee.role = role;
                existingEmployee.department = dept;
                existingEmployee.password = yield bcrypt_1.default.hash(password, 12);
                if (existingEmployee.address) {
                    existingEmployee.address.line1 = address.line1;
                    existingEmployee.address.pincode = address.pincode;
                }
                yield this.employeeRepository.update(id, existingEmployee);
            }
        });
    }
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingEmployee = yield this.employeeRepository.findone(id);
            if (existingEmployee) {
                yield this.employeeRepository.delete(id);
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.findbymail(email);
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employee.service.js.map