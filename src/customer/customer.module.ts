import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { AdminStrategy } from '../common/strategies';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [SequelizeModule.forFeature([Customer]),JwtModule],
  controllers: [CustomerController],
  providers: [CustomerService,AdminStrategy],
  exports: [CustomerService],
})
export class CustomerModule {}
