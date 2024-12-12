import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    example: 'Admin',
    description: "Admin's name",
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'admin@example.com',
    description: "Admin's email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'adminpassword',
    description: "Admin's password",
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'adminconfirmpassword',
    description: "Admin's confirm password",
  })
  @IsString()
  confirm_password: string;

  @ApiProperty({
    example: true,
    description: "Admin's status (active/inactive)",
  })
  @IsOptional()
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({
    example: true,
    description: "Admin's role (creator/non-creator)",
  })
  is_creator: boolean;

}
