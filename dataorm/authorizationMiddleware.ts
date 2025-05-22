import { NextFunction } from "express"
import { EmployeeRole } from "./entities/employee.entity"
import HttpException from "./exception/httpException"



export const AuthorizationMiddleware=(req,res,next:NextFunction)=>{
    const role=req.user?.role
    if(role!==EmployeeRole.HR){
        throw new HttpException(403,"Not Hr no access")
    }
    next();
}