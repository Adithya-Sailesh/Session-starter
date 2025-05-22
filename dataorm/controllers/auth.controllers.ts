
import { NextFunction } from "express-serve-static-core";
import HttpException from "../exception/httpException";
import {AuthService} from "../service/auth.service"
import { Router } from 'express'

class AuthContollers{
    authservice:AuthService
    constructor ( authserviceA:AuthService,private router:Router){
        this.authservice = authserviceA
        router.post("/login",this.loginA.bind(this));
    }
    async loginA(req,res,next:NextFunction){
        
        
        try{
            const email=req.body.email
            const password=req.body.password
            if(!email||!password){
                throw new HttpException(400,"emailexception")
                
            }
            const data= await this.authservice.login(email,password)
            res.status(200).send(data)
        }catch(Err){
            next(Err)
        }
    }
}
export default AuthContollers