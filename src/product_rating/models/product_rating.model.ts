import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ProductCategory } from "../../product_category/models/product_category.model";
import { Customer } from "../../customer/models/customer.model";
import { Product } from "../../product/models/product.model";

interface IProductRatingCreationAttr {
  categoryId: number;
  productId: number;
  rating: number;
}

@Table({ tableName: 'product_rating' })
export class ProductRating extends Model<
  ProductRating,
  IProductRatingCreationAttr
> {
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
    example: 5,
    description: 'rating of the product',
  })
  @Column({
    type: DataType.INTEGER,
  })
  rating: number;

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

  @BelongsTo(()=> Customer)
  customer: Customer;
}