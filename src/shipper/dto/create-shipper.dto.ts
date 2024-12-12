import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateShipperDto {
  @ApiProperty({
    example: 'Alijon',
    description: 'Name of the shipper',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: '+99890349034',
    description: 'phone number description',
  })
  @IsString()
  readonly phone: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'email address description',
  })
  @IsOptional()
  @IsEmail()
  readonly email: string;
}
