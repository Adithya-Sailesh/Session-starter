import { http } from "winston";
import { DepartmentService } from "../service/department.service";
import HttpException from "../exception/httpException";
import { NextFunction, Router } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateEmployeeDto } from "../dto/CreateEmployeeDto";
import { CreateDepartmentDto } from "../dto/CreateDept.dto";
import { UpdateDepartmentDto} from "../dto/updateDept.dto";


export class DeparmentContollers{
    constructor(private departmentService:DepartmentService,router:Router){

        router.get("/",this.getAllDepartment.bind(this))
        router.get("/:id",this.getDeptById.bind(this))
        router.post("/",this.createDepartment.bind(this))
        router.put("/:id",this.updateDepartment.bind(this))
        router.delete("/:id",this.deleteDept.bind(this))
    }


    async createDepartment(req,res,next:NextFunction){

                try {
                    const createDepartmentDto = plainToInstance(CreateDepartmentDto, req.body);
                    const errors = await validate(createDepartmentDto);
                    if (errors.length > 0) {
                        console.log(JSON.stringify(errors));
                        throw new HttpException(400, JSON.stringify(errors));
                    }
                    const savedDepartment = await this.departmentService.createDept(
                        createDepartmentDto.name,
                     
                        
                    );
                    res.status(201).send(savedDepartment);
                    } 
                    catch (error) {
                        next(error);
                    }
    }

    async getAllDepartment(req,res){
        const department=await this.departmentService.getAlldept()
        res.status(200).send(department)
    }

    async getDeptById(req,res,next:NextFunction){
        try{
            const id=req.params.id
            const dept=await this.departmentService.getDeptbyId(id)
            if(!dept){
                throw new HttpException(401,"Dept Not Found")
            }
            res.status(200).send(dept)
        }
        catch(err){
            next(err);
        }
    }

    async updateDepartment(req,res,next:NextFunction){
        try{

            const updateDepartmentDto=plainToInstance(UpdateDepartmentDto,req.body)
            const errors = await validate(updateDepartmentDto);
                    if (errors.length > 0) {
                        console.log(JSON.stringify(errors));
                        throw new HttpException(400, JSON.stringify(errors));
                    }
            const id=req.params.id
            const dept=this.departmentService.getDeptbyId(id)
            if(!dept){
                throw new HttpException(401,"Dept Cannot be found")
            }
            const updateDept=await this.departmentService.updateDepartment(id,updateDepartmentDto.name)
            res.status(200).send("Updated")
        }
        catch(err){
            next(err);
        }
    }

    async deleteDept(req,res,next:NextFunction){
        try{
            const id=req.params.id
            const dept=this.departmentService.getDeptbyId(id)
            if(!dept){
                throw new HttpException(401,"Dept Cannot be found")
            }
            await this.departmentService.deleteDepartment(id)
            res.status(200).send("Deleted Success Full")
        }
        catch(err){
            next(err);
        }
    }
}