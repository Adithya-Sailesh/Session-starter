import { NextFunction ,Response,Request} from "express";
import HttpException from "./exception/httpException";
import jwt from 'jsonwebtoken'
import { JWT_SECERET } from "./utils/constants";
import { JwtPayload } from "./dto/jwt-payload";

const gettoken=(req:Request)=>{
    const token:string=req.headers.authorization;
    if(!token){
        throw new HttpException(401,'Not Authorized')

    }
    const tokenSplits=token.split(' ')
    if(tokenSplits.length!=2){
        throw new HttpException(401,"Invalid Token")

    }
    return tokenSplits[1]
}
export const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const token=gettoken(req)
    if(!token){
        throw new HttpException(401,"Not Authorized")
    }
    try{
        const payload=jwt.verify(token,JWT_SECERET) as JwtPayload
        req.user=payload
        console.log(payload)
    }
    catch{
        throw new HttpException(401,"Invalid or expierd token")
    }
    
    next();
}