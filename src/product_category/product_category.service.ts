import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductCategory } from './models/product_category.model';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel(ProductCategory)
    private product_categoryModel: typeof ProductCategory,
  ) {}
  create(createProductCategoryDto: CreateProductCategoryDto) {
    return this.product_categoryModel.create(createProductCategoryDto);
  }

  findAll() {
    return this.product_categoryModel.findAll();
  }

  findOne(id: number) {
    return this.product_categoryModel.findByPk(id);
  }

  update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    return this.product_categoryModel.update(updateProductCategoryDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.product_categoryModel.destroy({ where: { id } });
  }
}
