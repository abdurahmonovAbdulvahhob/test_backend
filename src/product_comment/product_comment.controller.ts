import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCommentService } from './product_comment.service';
import { CreateProductCommentDto } from './dto/create-product_comment.dto';
import { UpdateProductCommentDto } from './dto/update-product_comment.dto';

@Controller('product-comment')
export class ProductCommentController {
  constructor(private readonly productCommentService: ProductCommentService) {}

  @Post('create')
  create(@Body() createProductCommentDto: CreateProductCommentDto) {
    return this.productCommentService.create(createProductCommentDto);
  }

  @Get('get')
  findAll() {
    return this.productCommentService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.productCommentService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProductCommentDto: UpdateProductCommentDto) {
    return this.productCommentService.update(+id, updateProductCommentDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productCommentService.remove(+id);
  }
}
