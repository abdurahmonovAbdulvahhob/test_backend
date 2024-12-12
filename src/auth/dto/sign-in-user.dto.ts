import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInCustomerDto {
  @ApiProperty({
    example: 'user',
    description: 'user unique email',
  })
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'qwerty12345',
    description: 'user password',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
