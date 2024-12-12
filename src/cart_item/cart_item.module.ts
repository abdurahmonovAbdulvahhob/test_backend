import { Module } from '@nestjs/common';
import { CartItemService } from './cart_item.service';
import { CartItemController } from './cart_item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartItem } from './models/cart_item.model';

@Module({
  imports: [SequelizeModule.forFeature([CartItem])],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
