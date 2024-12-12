import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import * as bcrypt from 'bcrypt';
import { ActivateCustomerDto } from './dto/activate-user.dto';
import { DeactivateCustomerDto } from './dto/deactivate-user.dto';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModel: typeof Customer) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const hashedPassword = await bcrypt.hash(createCustomerDto.password, 3);
    const newUser = await this.customerModel.create({
      ...createCustomerDto,
      hashed_password: hashedPassword,
    });
    return newUser;
  }

  findAll() {
    return this.customerModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.customerModel.findByPk(id,{include: {all: true}});
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
     if (updateCustomerDto.password && updateCustomerDto.confirm_password) {
       if (updateCustomerDto.password !== updateCustomerDto.confirm_password) {
         throw new BadRequestException('Parrollar mos emas');
       }
       const hashed_password = await bcrypt.hash(updateCustomerDto.password, 3);
       return this.customerModel.update(
         { ...updateCustomerDto, hashed_password },
         { where: { id }, returning: true },
       );
     }
     return this.customerModel.update(
       { ...updateCustomerDto },
       { where: { id }, returning: true },
     );
  }

  remove(id: number) {
    return this.customerModel.destroy({where:{id}});
  }

  async updateRefreshToken(
    id: number,
    hashed_refresh_token: string,
    activation_link?: string,
  ) {
    const updatedCustomer = await this.customerModel.update(
      { hashed_refresh_token, activation_link },
      { where: { id }, returning: true },
    );

    return updatedCustomer[1][0];
  }

  async findUserByEmail(email: string) {
    return this.customerModel.findOne({
      where: { email },
    });
  }

  async activateUser(
    link: string,
  ): Promise<{ is_active: boolean; message: string }> {
    const user = await this.customerModel.findOne({
      where: { activation_link: link, is_active: false },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.is_active) {
      throw new BadRequestException('User already activated');
    }

    user.is_active = true;
    await user.save();

    return {
      is_active: user.is_active,
      message: 'User activated successfully',
    };
  }

  async activateUserByAdmin(activateCustomerDto: ActivateCustomerDto) {
    const customer = await this.customerModel.findByPk(
      activateCustomerDto.customerId,
    );
    if (customer) {
      customer.is_active = true;
      await customer.save();

      return {
        message: 'User activated succesfully',
        id: customer.id,
        is_active: customer.is_active,
      };
    }

    throw new NotFoundException('user topilmadi');
  }

  async deactivateUserByAdmin(deactivateCustomerDto: DeactivateCustomerDto) {
    const customer = await this.customerModel.findByPk(
      deactivateCustomerDto.customerId,
    );
    if (customer) {
      customer.is_active = false;
      await customer.save();

      return {
        message: 'User deactivated succesfully',
        id: customer.id,
        is_active: customer.is_active,
      };
    }

    throw new NotFoundException('user topilmadi');
  }
}
