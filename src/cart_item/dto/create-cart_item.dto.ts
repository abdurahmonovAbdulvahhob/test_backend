import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartItemDto {
  @ApiProperty({
    example: 1,
    description: "Product ID",
    type: "number",
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    example: 1,
    description: "Quantity of the product",
    type: "number",
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    example: 1,
    description: "Cart ID",
    type: "number",
  })
  @IsNumber()
  cartId: number;
}
