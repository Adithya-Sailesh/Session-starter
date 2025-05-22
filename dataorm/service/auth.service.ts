import { JwtPayload } from "../dto/jwt-payload"
import { EmployeeRole } from "../entities/employee.entity"
import HttpException from "../exception/httpException"
import { JWT_SECERET, JWT_VALIDITY } from "../utils/constants"
import EmployeeService from "./employee.service"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export class AuthService{
    constructor(private employeeService:EmployeeService){}
    async login(email:string,password:string){
            const employee=await this.employeeService.findByEmail(email)
            console.log("Employee is"+employee)
            if(!employee){
                throw new HttpException(404,"User Not Found"); 
            }
            const isPasswordValid=await bcrypt.compare(password,employee.password)
            if (!isPasswordValid){
                throw new HttpException(400,"Invalid Password")
            }
            const payload:JwtPayload={
                id:employee.id,
                email:employee.email,
                role:employee.role
            }
             console.log("PAypay"+payload)
            const token=jwt.sign(payload,JWT_SECERET,{expiresIn:JWT_VALIDITY})
            return {
                tokenType:"Bearer",
                accessToken:token
            }
           
    }
}
