import Employee from "../entities/employee.entity";
import EmployeeRepository from "../repositories/employee.repostitorie";
import EmployeeService from "../service/employee.service";
import { mock,MockProxy } from "jest-mock-extended";
import { when } from 'jest-when';
describe("EmployeeService",()=>{
    let employeeRepository:MockProxy<EmployeeRepository>;
    let employeeService:EmployeeService;
    beforeEach(()=>{
        employeeRepository=mock<EmployeeRepository>();
        employeeService=new EmployeeService(employeeRepository);

    })

    describe("Get employee by id",()=>{
        it("should return value when proper id eixtss",async()=>{
            const mockEmployee={id:123,name:"Suresh"} as Employee;
            when(employeeRepository.findone).calledWith(1).mockReturnValue(mockEmployee)

            const result=await employeeService.getEmployeeById(1)
            expect(employeeRepository.findone).toHaveBeenCalledWith(1)
            expect(result).toStrictEqual(mockEmployee)
        })
        
    })
})