import { IsNotEmpty, IsString } from "class-validator";

export class createDepartmentDto {
  @IsNotEmpty()
  @IsString()
  name:string
  
}