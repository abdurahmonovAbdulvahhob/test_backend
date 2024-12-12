import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductCommentDto {
  @ApiProperty({
    description: 'Product ID',
    example: 1,
    type: Number,
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    description: 'Customer ID',
    example: 1,
    type: Number,
  })
  @IsNumber()
  customerId: number;

  @ApiProperty({
    description: 'Comment content',
    example: 'This product is great!',
    type: String,
  })
  @IsString()
  comment: string;

}
