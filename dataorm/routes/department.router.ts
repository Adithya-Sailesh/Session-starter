import express from 'express'
import DeparmentRepository from '../repositories/department.repostiory'
import datasource from '../db/data-source'
import Department from '../entities/department.entity'
import { DepartmentService } from '../service/department.service'
import { DeparmentContollers } from '../controllers/department.controllers'

export const departmentRouter =express.Router()
const  departmentRepository=new DeparmentRepository(datasource.getRepository(Department))
export const departmentService=new DepartmentService( departmentRepository)
new DeparmentContollers(departmentService,departmentRouter)
