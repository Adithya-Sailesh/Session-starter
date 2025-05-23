import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  line1: string;

  @IsNotEmpty()
  @IsString()
  pincode: string;
  
  @IsNotEmpty()
  @IsString()
  line2:string;

  @IsString()
  @IsNotEmpty()
  houseNo:string
}