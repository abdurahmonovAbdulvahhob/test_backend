import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCartDto {
  @ApiProperty({
    example: 1,
    description: 'Customer ID',
    type: 'number',
  })
  @IsNumber()
  customerId: number;

  @ApiProperty({
    example: 'active',
    description: 'Status of the cart',
    type: 'string',
  })
  @IsString()
  status: 'yangi' | 'jarayonda' | 'tugallangan';
}
