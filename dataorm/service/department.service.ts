import { error, http } from "winston";
import Department from "../entities/department.entity";
import DeparmentRepository from "../repositories/department.repostiory";
import HttpException from "../exception/httpException";
import { LoggerService } from "./logger.service";


export class DepartmentService{
    private logger=LoggerService.getInstance(DepartmentService.name)
    constructor(private departmentRepository:DeparmentRepository){}
    
    async createDept(name:string):Promise<Department>{
        this.logger.info("Dept Created")
        const dept=new Department()
        dept.deptname=name;
        return  this.departmentRepository.create(dept)
    }

    async getAlldept():Promise<Department[]>{
        this.logger.info("All Dept fetched")
        return this.departmentRepository.findMany()
    }

    async getDeptbyId(id:number):Promise<Department>{
        
        let dept= this.departmentRepository.findbyid(id)
        if(!dept){
            this.logger.error("Dept Not Found")
            throw new HttpException(401,"Dept not found")

        }
        return dept
    }

    async updateDepartment(id:number,name:string):Promise<void>{
        let existingDept=await this.departmentRepository.findbyid(id);
        if(!existingDept){

            throw new HttpException(401,"Department Not found")
        }
        existingDept.deptname=name
        await this.departmentRepository.update(id,existingDept)
    }

    async deleteDepartment(id:number):Promise<void>{
        let dept=await this.departmentRepository.findbyid(id);
        if(!dept){
             this.logger.error("Dept Not Found")
             throw new HttpException(401,"Department Not found")
        }
        await this.departmentRepository.delete(id)

    }
}