import { IsDate, IsEmail, IsEnum, isNotEmpty, IsNotEmpty, IsNumber, IsString, MinLength, minLength, validate, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./create-address.dto";
import { Type } from "class-transformer";
import { EmployeeRole, Status } from "../entities/employee.entity";
import { createDepartmentDto } from "./CreateDept.dto";

export class CreateEmployeeDto {

  @IsNotEmpty()
  @IsString()
  employeeId:string

  @IsDate()
  dateOfJoining :Date

  @IsNumber()
  experience:number
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;


  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password:string

  @IsEnum(EmployeeRole)
  role:EmployeeRole

  @IsNotEmpty()
  @IsNumber()
  dept_id:number



  @IsEnum(Status)
  status:Status

}