import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductCategory } from '../../product_category/models/product_category.model';
import { Customer } from '../../customer/models/customer.model';
import { Product } from '../../product/models/product.model';

interface IProductCommentCreationAttr {
  categoryId: number;
  productId: number;
  comment: string;
}

@Table({ tableName: 'product_comment' })
export class ProductComment extends Model<
  ProductComment,
  IProductCommentCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: 'Product Comment ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 5,
    description: 'comment to the product',
  })
  @Column({
    type: DataType.STRING,
  })
  comment: string;

  @ApiProperty({
    example: 1,
    description: 'Customer ID of the product',
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ApiProperty({
    example: 1,
    description: 'Product ID of the product',
  })
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => Customer)
  customer: Customer;
}