import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { AdminGuard } from '../common/guards';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ProductCategory')
@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @ApiOperation({ summary: 'create new product category' })
  @ApiResponse({
    status: 201,
    description: 'create',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Post('create')
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoryService.create(createProductCategoryDto);
  }

  @ApiOperation({ summary: 'get all product category' })
  @ApiResponse({
    status: 201,
    description: 'getall',
    type: Object,
  })
  @Get('get')
  findAll() {
    return this.productCategoryService.findAll();
  }

  @ApiOperation({ summary: 'get  product category' })
  @ApiResponse({
    status: 201,
    description: 'get',
    type: Object,
  })
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'update  product category' })
  @ApiResponse({
    status: 201,
    description: 'update',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.update(+id, updateProductCategoryDto);
  }

  @ApiOperation({ summary: 'delete  product category' })
  @ApiResponse({
    status: 201,
    description: 'delete',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productCategoryService.remove(+id);
  }
}
