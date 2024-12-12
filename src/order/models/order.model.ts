import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { OrderAddress } from "../../order_address/models/order_address.model";
import { Shipper } from "../../shipper/models/shipper.model";
import { OrderItem } from "../../order_item/models/order_item.model";

interface IOrderCreationAttr {
  customerId: number;
  order_addressId: number;
  shipperId: number;
  status: 'new' | 'pending' | 'ended';
  total_price: number;
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, IOrderCreationAttr> {
  @ApiProperty({
    example: 1,
    description: 'Order ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'Customer ID of the order',
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ApiProperty({
    example: 1,
    description: 'Order Address ID',
  })
  @ForeignKey(() => OrderAddress)
  @Column({
    type: DataType.INTEGER,
  })
  order_addressId: number;

  @ApiProperty({
    example: 1,
    description: 'Shipper ID',
  })
  @ForeignKey(() => Shipper)
  @Column({
    type: DataType.INTEGER,
  })
  shipperId: number;

  @ApiProperty({
    example: 'pending',
    description: 'Status of the order',
  })
  @Column({
    type: DataType.ENUM('new' , 'pending' , 'ended'),
  })
  status: string;

  @ApiProperty({
    example: 1000,
    description: 'Total price of the order',
  })
  @Column({
    type: DataType.DECIMAL,
  })
  total_price: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => OrderAddress)
  order_address: OrderAddress;

  @BelongsTo(() => Shipper)
  shipper: Shipper;

  @HasMany(() => OrderItem)
  order_items: OrderItem[];
}
