
import {Router,Request, NextFunction }from "express"
import EmployeeService from "../service/employee.service";
import HttpException from "../exception/httpException";
import { isEmail } from "../validators/emailvalidator";
import { plainToInstance } from "class-transformer";
import {validate} from "class-validator"
import { CreateEmployeeDto } from "../dto/CreateEmployeeDto";
import { CreateAddressDto } from "../dto/create-address.dto";
import { AuthorizationMiddleware } from "../authorizationMiddleware";
import { UpdateEmployeeDto } from "../dto/UpdateEmployee.dto";

class EmployeeControlers{
    constructor(private employeeService:EmployeeService,router:Router){
        router.post("/",AuthorizationMiddleware, this.createEmployee.bind(this))
        router.get("/",this.getAllEmployees.bind(this))
        router.get("/:id",this.getEmloyeeById.bind(this))
        router.put("/:id",AuthorizationMiddleware,this.updateEmployee)
        router.delete("/:id",AuthorizationMiddleware,this.deleteEmployee)
    }

    async createEmployee(req,res,next:NextFunction){
        // try{
        //     const name=req.body.name;
        //     const email=req.body.email;
        //     const age=req.body.age
        //     const address=req.body.address;
        //     if(!isEmail(email)){
        //         throw new HttpException(412,"Not valid email");
        //     }
        //     const employee= await this.employeeService.createEmployee(email,name,age,address);
        //     res.status(201).send(employee)
        // }

                    try {
                    const createEmployeeDto = plainToInstance(CreateEmployeeDto, req.body);
                    const errors = await validate(createEmployeeDto);
                    if (errors.length > 0) {
                        console.log(JSON.stringify(errors));
                        throw new HttpException(400, JSON.stringify(errors));
                    }
                    const savedEmployee = await this.employeeService.createEmployee(
                        createEmployeeDto.name,
                        createEmployeeDto.email,
                        createEmployeeDto.age,
                        createEmployeeDto.role,
                        createEmployeeDto.dept_id,
                        createEmployeeDto.password,
                        createEmployeeDto.employeeId,
                        createEmployeeDto.dateOfJoining,
                        createEmployeeDto.experience,
                        createEmployeeDto.status,
                        createEmployeeDto.address,
                        
                    );
                    res.status(201).send(savedEmployee);
                    } catch (error) {
                    next(error);
                    }   
        
    }


    updateEmployee=async(req,res,next:NextFunction)=>{
        // try{
        //     const id=req.body.id
        //     const name=req.body.name
        //     const email=req.body.email
        //     const age=req.body.age
        //     const role=req.body.role
        //     const address=req.body.address  
        //     const password=req.body.password
        //     await this.employeeService.updateEmployee(id,name,email,age,role,password,address);
        //     res.status(201).send("Updated")
        // }
        // catch(err){
        //     next(err)
        // }

         try {
                    const updateEmployeeDto = plainToInstance(UpdateEmployeeDto, req.body);
                    const errors = await validate(updateEmployeeDto);
                    if (errors.length > 0) {
                        console.log(JSON.stringify(errors));
                        throw new HttpException(400, JSON.stringify(errors));
                    }
                    const update = await this.employeeService.updateEmployee(
                        Number(req.params.id),
                        updateEmployeeDto.name,
                        updateEmployeeDto.email,
                        updateEmployeeDto.age,
                        updateEmployeeDto.role,
                        updateEmployeeDto.dept_id,
                        updateEmployeeDto.password,
                        updateEmployeeDto.employeeId,
                        updateEmployeeDto.dateOfJoining,
                        updateEmployeeDto.experience,
                        updateEmployeeDto.status,
                        updateEmployeeDto.address
                        
                    );
                    res.status(200).send("updated");
                    } catch (error) {
                    next(error);
                    }   
      

        
    }

    async getAllEmployees(req,res){
        const employess=await this.employeeService.getAllEmployees();
        res.status(201).send(employess)
    }
    async getEmloyeeById(req,res,next:NextFunction){
        try{
        const employee=await this.employeeService.getEmployeeById(req.params.id)
        if(!employee){
            throw new HttpException(404,"notfound")
        }
        
            res.status(201).send(employee)
        }catch(err){
            //res.status(404).send("notfound")
            console.log(err)
            next(err);
        }
        
    }

   

   deleteEmployee= async (req,res)=>{
        await this.employeeService.deleteEmployee(req.params.id);
        res.status(200).send("Deleted")
    }

}

export default EmployeeControlers