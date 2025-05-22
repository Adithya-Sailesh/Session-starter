import {AuthService} from "../service/auth.service"
import AuthContollers from "../controllers/auth.controllers"
import {employeeService} from "../routes/employee.route"
import  express  from 'express'

export const authRouter=express.Router();

const authService=new AuthService(employeeService);
new AuthContollers(authService,authRouter)