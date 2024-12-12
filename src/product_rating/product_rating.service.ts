import { Injectable } from '@nestjs/common';
import { CreateProductRatingDto } from './dto/create-product_rating.dto';
import { UpdateProductRatingDto } from './dto/update-product_rating.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductRating } from './models/product_rating.model';

@Injectable()
export class ProductRatingService {
  constructor(
    @InjectModel(ProductRating)
    private product_ratingModel: typeof ProductRating,
  ) {}
  create(createProductRatingDto: CreateProductRatingDto) {
    return this.product_ratingModel.create(createProductRatingDto);
  }

  findAll() {
    return this.product_ratingModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.product_ratingModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateProductRatingDto: UpdateProductRatingDto) {
    return this.product_ratingModel.update(updateProductRatingDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.product_ratingModel.destroy({ where: { id } });
  }
}
