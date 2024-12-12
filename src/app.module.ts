import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { ShipperModule } from './shipper/shipper.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { ProductRatingModule } from './product_rating/product_rating.module';
import { ProductCommentModule } from './product_comment/product_comment.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart_item/cart_item.module';
import { OrderAddressModule } from './order_address/order_address.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order_item/order_item.module';
import { PaymentModule } from './payment/payment.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      logging: false,
      autoLoadModels: true,
      sync: { alter: true },
    }),
    AdminModule,
    AuthModule,
    PaymentMethodModule,
    ProductCategoryModule,
    ShipperModule,
    ProductModule,
    CustomerModule,
    ProductRatingModule,
    ProductCommentModule,
    WishlistModule,
    CartModule,
    CartItemModule,
    OrderAddressModule,
    OrderModule,
    OrderItemModule,
    PaymentModule,
    LoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
