import express from 'express'
import EmployeeRepository from '../repositories/employee.repostitorie'
import datasource from '../db/data-source'
import Employee from '../entities/employee.entity'
import EmployeeService from '../service/employee.service'
import EmployeeControlers from '../controllers/employee.controller'
import { Repository } from 'typeorm'
import DeparmentRepository from '../repositories/department.repostiory'
import Department from '../entities/department.entity'


const employeeRouter=express.Router();
const employeeRepository=new EmployeeRepository(datasource.getRepository(Employee))
const departmentRepository=new DeparmentRepository(datasource.getRepository(Department))
export const employeeService=new EmployeeService(employeeRepository,departmentRepository)
new EmployeeControlers(employeeService,employeeRouter)
export default employeeRouter

