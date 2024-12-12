import { Module } from '@nestjs/common';
import { OrderAddressService } from './order_address.service';
import { OrderAddressController } from './order_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderAddress } from './models/order_address.model';

@Module({
  imports:[SequelizeModule.forFeature([OrderAddress])],
  controllers: [OrderAddressController],
  providers: [OrderAddressService],
})
export class OrderAddressModule {}
