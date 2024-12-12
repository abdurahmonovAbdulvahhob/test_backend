import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod)
    private payment_methodModel: typeof PaymentMethod,
  ) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.payment_methodModel.create(createPaymentMethodDto);
  }

  findAll() {
    return this.payment_methodModel.findAll();
  }

  findOne(id: number) {
    return this.payment_methodModel.findByPk(id);
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.payment_methodModel.update(updatePaymentMethodDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.payment_methodModel.destroy({where: {id}});
  }
}
