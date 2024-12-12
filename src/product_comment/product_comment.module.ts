import { Module } from '@nestjs/common';
import { ProductCommentService } from './product_comment.service';
import { ProductCommentController } from './product_comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductComment } from './models/product_comment.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductComment])],
  controllers: [ProductCommentController],
  providers: [ProductCommentService],
})
export class ProductCommentModule {}
