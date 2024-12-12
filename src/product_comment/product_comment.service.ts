import { Injectable } from '@nestjs/common';
import { CreateProductCommentDto } from './dto/create-product_comment.dto';
import { UpdateProductCommentDto } from './dto/update-product_comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductComment } from './models/product_comment.model';

@Injectable()
export class ProductCommentService {
  constructor(
    @InjectModel(ProductComment)
    private product_commentModel: typeof ProductComment,
  ) {}
  create(createProductCommentDto: CreateProductCommentDto) {
    return this.product_commentModel.create(createProductCommentDto);
  }

  findAll() {
    return this.product_commentModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.product_commentModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateProductCommentDto: UpdateProductCommentDto) {
    return this.product_commentModel.update(updateProductCommentDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.product_commentModel.destroy({ where: { id } });
  }
}
