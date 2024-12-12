import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateOrderItemDto {
  @ApiProperty({
    example: '1',
    description: 'ID of the order',
  })
  @IsNumber()
  orderId: number;

  @ApiProperty({
    example: '1',
    description: 'ID of the product',
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    example: 20,
    description: 'quantity of product',
  })
  @IsNumber()
  quantity: number;
}
