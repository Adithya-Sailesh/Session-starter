import { http } from "winston";
import { DepartmentService } from "../service/department.service";
import HttpException from "../exception/httpException";
import { NextFunction, Router } from "express";


export class DeparmentContollers{
    constructor(private departmentService:DepartmentService,router:Router){

        router.get("/",this.getAllDepartment.bind(this))
        router.get("/:id",this.getDeptById.bind(this))
        router.post("/",this.createDepartment.bind(this))
        router.put("/:id",this.updateDepartment.bind(this))
        router.delete("/:id",this.deleteDept.bind(this))
    }


    async createDepartment(req,res){
        const deptname=req.body.deptname

        const dept=await this.departmentService.createDept(deptname)
        res.status(201).send(dept)
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
            const id=req.params.id
            const dept=this.departmentService.getDeptbyId(id)
            if(!dept){
                throw new HttpException(401,"Dept Cannot be found")
            }
            const updateDept=await this.departmentService.updateDepartment(id,req.body.deptname)
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