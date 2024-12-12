import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductRatingService } from './product_rating.service';
import { CreateProductRatingDto } from './dto/create-product_rating.dto';
import { UpdateProductRatingDto } from './dto/update-product_rating.dto';

@Controller('product-rating')
export class ProductRatingController {
  constructor(private readonly productRatingService: ProductRatingService) {}

  @Post('create')
  create(@Body() createProductRatingDto: CreateProductRatingDto) {
    return this.productRatingService.create(createProductRatingDto);
  }

  @Get('get')
  findAll() {
    return this.productRatingService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.productRatingService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProductRatingDto: UpdateProductRatingDto) {
    return this.productRatingService.update(+id, updateProductRatingDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productRatingService.remove(+id);
  }
}
