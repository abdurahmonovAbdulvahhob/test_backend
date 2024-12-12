import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { OrderItem } from './models/order_item.model';

@Injectable()
export class OrderItemService {
  constructor(@InjectModel(OrderItem) private order_itemModel: typeof OrderItem) {}
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.order_itemModel.create(createOrderItemDto);
  }

  findAll() {
    return this.order_itemModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.order_itemModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.order_itemModel.update(updateOrderItemDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.order_itemModel.destroy({ where: { id } });
  }
}
