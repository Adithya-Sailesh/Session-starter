import { IsDate, IsEmail, IsEnum, isNotEmpty, IsNotEmpty, IsNumber, IsString, MinLength, minLength, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./create-address.dto";
import { Type } from "class-transformer";
import { EmployeeRole, EmployeeStatus } from "../entities/employee.entity";

export class UpdateEmployeeDto {

  @IsNotEmpty()
  @IsString()
  employeeId:string


  @IsNotEmpty()
  @Type(()=>Date)
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


@IsEnum(EmployeeStatus)
  status:EmployeeStatus

  @IsNotEmpty()
  @IsNumber()
  dept_id:number
}