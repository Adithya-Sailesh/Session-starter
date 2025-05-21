import Employee from "../entities/employee.entity";
import EmployeeRepository from "../repositories/employee.repostitorie";

class EmployeeService{
    constructor(private employeeRepository:EmployeeRepository){}



    async getAllEmployees():Promise<Employee[]>{
        return this.employeeRepository.findMany();
    }
    async getEmployeeById(id:number):Promise<Employee>{
        return this.employeeRepository.findone(id)

    }
    async createEmployee(email:string,name:string):Promise<Employee>{
        const emp=new Employee();
        emp.name=name
        emp.email=email
        return this.employeeRepository.create(emp)
    }
    async updateEmployee(id:number,email:string,name:string):Promise<void>{

        const existingEmployee=await this.employeeRepository.findone(id);
        if(existingEmployee){
            const newEmployee=new Employee();
            newEmployee.name=name
            newEmployee.email=email
            await this.employeeRepository.update(id,newEmployee);
        }
    }

    async deleteEmployee(id:number):Promise<void>{
        const existingEmployee=await this.employeeRepository.findone(id);
        if(existingEmployee){
            await this.employeeRepository.delete(id)
        }
       
    }

}


export default EmployeeService