import { Module } from '@nestjs/common';
import { ProductRatingService } from './product_rating.service';
import { ProductRatingController } from './product_rating.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductRating } from './models/product_rating.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductRating])],
  controllers: [ProductRatingController],
  providers: [ProductRatingService],
})
export class ProductRatingModule {}
