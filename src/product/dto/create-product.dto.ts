import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    example: 'cakedonut',
    description: 'Name of the product',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'about cake',
    description: 'description of the product',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: '10',
    description: 'price of the product',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'https://www.example.com/image.png',
    description: 'url of the image of the product',
  })
  @IsString()
  image: string;


  @ApiProperty({
    example: '1',
    description: 'categoryId of the product',
  })
  @IsNumber()
  categoryId: number;

  @ApiProperty({
    example: '1',
    description: 'stock of the product',
  })
  @IsOptional()
  @IsNumber()
  stock?: number;

  @ApiProperty({
    example: '1',
    description: 'avg rating of the product',
  })
  @IsNumber()
  average_rating: number;
}
