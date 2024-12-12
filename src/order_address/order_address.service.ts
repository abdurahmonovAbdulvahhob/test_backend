import { Injectable } from '@nestjs/common';
import { CreateOrderAddressDto } from './dto/create-order_address.dto';
import { UpdateOrderAddressDto } from './dto/update-order_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { OrderAddress } from './models/order_address.model';

@Injectable()
export class OrderAddressService {
  constructor(@InjectModel(OrderAddress) private order_addressModel: typeof OrderAddress){}
  create(createOrderAddressDto: CreateOrderAddressDto) {
    return this.order_addressModel.create(createOrderAddressDto);
  }

  findAll() {
    return this.order_addressModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.order_addressModel.findByPk(id,{include: {all: true}});
  }

  update(id: number, updateOrderAddressDto: UpdateOrderAddressDto) {
    return this.order_addressModel.update(updateOrderAddressDto,{where: {id},returning: true});
  }

  remove(id: number) {
    return this.order_addressModel.destroy({where:{id}});
  }
}
