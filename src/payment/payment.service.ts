import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment) private paymentModel: typeof Payment){}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentModel.create(createPaymentDto);
  }

  findAll() {
    return this.paymentModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.paymentModel.findByPk(id,{include: {all: true}});
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentModel.update(updatePaymentDto,{where: {id},returning: true});
  }

  remove(id: number) {
    return this.paymentModel.destroy({where:{id}});
  }
}
