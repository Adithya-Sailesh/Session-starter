
import {Router,Request }from "express"
import EmployeeService from "../service/employee.service";



class EmployeeControlers{
    constructor(private employeeService:EmployeeService,router:Router){
        router.post("/",this.createEmployee.bind(this))
        router.get("/",this.getAllEmployees.bind(this))
        router.get("/:id",this.getEmloyeeById.bind(this))
        router.put("/:id",this.updateEmployee)
        router.delete("/:id",this.deleteEmployee)
    }


    async createEmployee(req,res){
        const name=req.body.name;
        const email=req.body.email;
        const employee= await this.employeeService.createEmployee(email,name);
        res.status(201).send(employee)
    }

    async getAllEmployees(req,res){
        const employess=await this.employeeService.getAllEmployees();
        res.status(201).send(employess)
    }
    async getEmloyeeById(req,res){
        const employee=await this.employeeService.getEmployeeById(req.params.id)
        res.status(201).send(employee)
    }

   updateEmployee=async(req,res)=>{
        const id=req.body.id
        const name=req.body.name
        const email=req.body.email
        await this.employeeService.updateEmployee(id,name,email);
        res.status(201).send("Updated")
    }

   deleteEmployee= async (req,res)=>{
        await this.employeeService.deleteEmployee(req.params.id);
        res.status(201).send("Deleted")
    }

}

export default EmployeeControlers