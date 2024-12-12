import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    example: 'userfirstname',
    description: "User's firstname",
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'userlastname',
    description: "User's lastname",
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'useremail@gmail.com',
    description: "User's email",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // @IsStrongPassword({ minLength: 6,minSymbols: 0 })
  @ApiProperty({
    example: 'userpassword',
    description:
      "User's password,needs strong password(symbol,number,alphabet)",
  })
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty({
    example: 'userpassword',
    description:
      "User's confirm password,needs strong password(symbol,number,alphabet)",
  })
  @IsString()
  @MinLength(4)
  confirm_password: string;
}
