import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProductCategoryDto {
  @ApiProperty({
    example: 'cake',
    description: 'type cake bulochka pishiriq',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'about cake',
    description: 'name description',
  })
  @IsOptional()
  @IsString()
  readonly description: string;
}
