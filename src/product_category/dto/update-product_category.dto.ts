import { PartialType } from '@nestjs/swagger';
import { CreateProductCategoryDto } from './create-product_category.dto';

export class UpdateProductCategoryDto extends PartialType(CreateProductCategoryDto) {}
