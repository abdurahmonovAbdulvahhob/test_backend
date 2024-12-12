import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from './models/cart_item.model';

@Injectable()
export class CartItemService {
  constructor(@InjectModel(CartItem) private cart_itemModel: typeof CartItem) {}
  create(createCartItemDto: CreateCartItemDto) {
    return this.cart_itemModel.create(createCartItemDto);
  }

  findAll() {
    return this.cart_itemModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.cart_itemModel.findByPk(id,{include: {all: true}});
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return this.cart_itemModel.update(updateCartItemDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.cart_itemModel.destroy({where: {id}});
  }
}
