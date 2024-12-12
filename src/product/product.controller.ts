import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminGuard } from '../common/guards';
import { Public } from '../common/decorators';

@UseGuards(AdminGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Creating product' })
  @ApiResponse({
    status: 200,
    description: 'Create product',
    type: Object,
  })
  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiOperation({ summary: 'get all product' })
  @ApiResponse({
    status: 200,
    description: 'get all product',
    type: Object,
  })
  @Public()
  @Get('get')
  findAll() {
    return this.productService.findAll();
  }

  @ApiOperation({ summary: 'get 1 product' })
  @ApiResponse({
    status: 200,
    description: 'get 1 product',
    type: Object,
  })
  @Public()
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiOperation({ summary: 'update product' })
  @ApiResponse({
    status: 200,
    description: 'update product',
    type: Object,
  })
  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(+id, updateProductDto);
  }

  @ApiOperation({ summary: 'delete product' })
  @ApiResponse({
    status: 200,
    description: 'delete product',
    type: Object,
  })
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
