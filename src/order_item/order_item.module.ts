import { Module } from '@nestjs/common';
import { OrderItemService } from './order_item.service';
import { OrderItemController } from './order_item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './models/order_item.model';

@Module({
  imports: [SequelizeModule.forFeature([OrderItem])],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrderItemModule {}
