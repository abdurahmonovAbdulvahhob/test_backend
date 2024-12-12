import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateWishlistDto {
  @ApiProperty({
    example: '1',
    description: 'ID of the product',
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    example: '1',
    description: 'ID of the user',
  })
  @IsNumber()
  customerId: number;
}
