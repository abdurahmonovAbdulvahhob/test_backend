import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInAdminDto {
  @ApiProperty({
    example: 'admin',
    description: 'Admin unique email',
  })
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'qwerty12345',
    description: 'Admin password',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
