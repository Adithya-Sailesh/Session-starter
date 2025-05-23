import { IsNotEmpty, IsString } from "class-validator";

export class updateAddressDto {
  @IsNotEmpty()
  @IsString()
  line1: string;

  @IsNotEmpty()
  @IsString()
  pincode: string;
  
}