import { StreamDescription } from "typeorm";
import { CreateAddressDto } from "../dto/create-address.dto";
import Address from "../entities/adress.entity";
import Employee, { EmployeeRole } from "../entities/employee.entity";
import EmployeeRepository from "../repositories/employee.repostitorie";

import bcrypt from 'bcrypt'
import HttpException from "../exception/httpException";
class EmployeeService{
    constructor(private employeeRepository:EmployeeRepository){}

     
    

    async getAllEmployees():Promise<Employee[]>{
        return this.employeeRepository.findMany();
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


     async getEmployeeById(id: number): Promise<Employee | null> {
      let employee = await this.employeeRepository.findone(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  }


    async createEmployee(email:string,name:string,age:number,role:EmployeeRole,password:string,address:CreateAddressDto):Promise<Employee>{
        // const emp=new Employee();
        // emp.name=name
        // emp.email=email
        // emp.age=age
        // emp.address=address
        const newAddress = new Address();
        newAddress.line1 = address.line1;
        newAddress.pincode = address.pincode;
        const newEmployee = new Employee();
        newEmployee.email = email;
        newEmployee.name = name;
        newEmployee.age = age;
        newEmployee.role=role;
        newEmployee.password=  await bcrypt.hash(password,12);
        newEmployee.address = newAddress;
        
        return this.employeeRepository.create(newEmployee)
    }
    async updateEmployee(id:number,email:string,name:string,age:number,address:CreateAddressDto):Promise<void>{

        const existingEmployee=await this.employeeRepository.findone(id);
        if(existingEmployee){
            // const newEmployee=new Employee();
            existingEmployee.name=name
            existingEmployee.email=email
            existingEmployee.age=age
            if(existingEmployee.address){
                existingEmployee.address.line1=address.line1
                existingEmployee.address.pincode=address.pincode
            }
            await this.employeeRepository.update(id,existingEmployee);
        }
    }


    async deleteEmployee(id:number):Promise<void>{
        const existingEmployee=await this.employeeRepository.findone(id);
        if(existingEmployee){
            await this.employeeRepository.delete(id)
        }
       
    }

    async findByEmail(email:string):Promise<Employee>{

        return this.employeeRepository.findbymail(email)
    }

}


export default EmployeeService