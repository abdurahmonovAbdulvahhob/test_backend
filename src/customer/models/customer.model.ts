import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../product/models/product.model';
import { ProductRating } from '../../product_rating/models/product_rating.model';
import { ProductComment } from '../../product_comment/models/product_comment.model';
import { Cart } from '../../cart/models/cart.model';
import { OrderAddress } from '../../order_address/models/order_address.model';
import { Order } from '../../order/models/order.model';

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  hashed_password:string;
  is_active: string;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "User's unique id(autoincrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: 'ID',
  })
  id: number;

  @ApiProperty({
    example: 'user1',
    description: "User's firstname ",
  })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({
    example: 'user1',
    description: "User's lastname ",
  })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: 'user@gmail.com',
    description: "User's email ",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: 'userpassword',
    description: "User's password ",
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: '+998900333422',
    description: "User's phone number",
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;

  @ApiProperty({
    example: 'false',
    description:
      "User's activation(active,not active - boolean(true,false),defaultValue-false) ",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @HasMany(() => ProductRating)
  product_ratings: ProductRating[];

  @HasMany(() => ProductComment)
  product_comments: ProductComment[];

  @HasMany(() => Cart)
  carts: Cart[];

  @HasMany(() => OrderAddress)
  order_addresses: OrderAddress[];

  @HasMany(()=> Order)
  orders: Order[]

  
}
