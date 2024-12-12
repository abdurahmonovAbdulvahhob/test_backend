import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';
import { Product } from '../../product/models/product.model';

interface IWishlistCreationAttr {
  categoryId: number;
  productId: number;
}

@Table({ tableName: 'wishlist' })
export class Wishlist extends Model<Wishlist, IWishlistCreationAttr> {
  @ApiProperty({
    example: 1,
    description: 'Product ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


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