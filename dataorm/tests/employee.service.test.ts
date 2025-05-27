    import Employee from "../entities/employee.entity";
    import DeparmentRepository from "../repositories/department.repostiory";
    import EmployeeRepository from "../repositories/employee.repostitorie";
    import EmployeeService from "../service/employee.service";
    import { mock,MockProxy } from "jest-mock-extended";
    import { when } from "jest-when";
    describe("EmployeeService",()=>{
        let employeeRepository:MockProxy<EmployeeRepository>;
        let departmentRepository:MockProxy<DeparmentRepository>;
        let employeeService:EmployeeService;
        beforeEach(()=>{
            employeeRepository=mock<EmployeeRepository>();
            departmentRepository=mock<DeparmentRepository>();
            employeeService=new EmployeeService(employeeRepository,departmentRepository);
        })
        describe("Get employee by id",()=>{
            it("Should return value when proper id eixtss",async()=>{
                const mockEmployee={id:123,name:"Suresh"} as Employee;
                when(employeeRepository.findone).calledWith(1).mockReturnValue(mockEmployee)

                const result=await employeeService.getEmployeeById(1)
                expect(employeeRepository.findone).toHaveBeenCalledWith(1)
                expect(result).toStrictEqual(mockEmployee)
            })

            it('should throw an error when user with provided id does not exsist',async()=>{
                    when(employeeRepository.findone).calledWith(2).mockReturnValue(null)
                    expect(employeeService.getEmployeeById(2)).rejects.toThrow("Employee not found")
                    expect(employeeRepository.findone).toHaveBeenCalledWith(2);
            })
            
        })

        describe("Get all employess",()=>{
            it("All data in the database",async()=>{    
                const mockEmployeeArr=[{id:1,name:"Nevin"},{id:2,name:"Vidhu"}] as Employee[];
                when(employeeRepository.findMany).calledWith().mockReturnValue(mockEmployeeArr)
                const result=await employeeService.getAllEmployees()
                expect(employeeRepository.findMany).toHaveBeenCalled()
                expect(result).toStrictEqual(mockEmployeeArr)
            })
            it("No employee in the database --error",async()=>{
                    const mockEmployeeArr=[] as Employee[]
                    when(employeeRepository.findMany).calledWith().mockReturnValue(mockEmployeeArr)
                    expect(employeeService.getAllEmployees).toHaveLength(0)
            })
        })
    })