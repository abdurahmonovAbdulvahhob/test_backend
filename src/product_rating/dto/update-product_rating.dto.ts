import { PartialType } from '@nestjs/swagger';
import { CreateProductRatingDto } from './create-product_rating.dto';

export class UpdateProductRatingDto extends PartialType(CreateProductRatingDto) {}
