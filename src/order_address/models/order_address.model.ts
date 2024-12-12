import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Order } from "../../order/models/order.model";

interface IOrderAddressCreationAttr {
  customerId: number;
  address: string;
  city: string;
  postal_code: number;
  street: string;
  flat_number: number;
  house_number: number;
  phone: string;
}

@Table({tableName: "order_address"})
export class OrderAddress extends Model<OrderAddress,IOrderAddressCreationAttr>{
  @ApiProperty({
    example: 1,
    description: "Order Address ID",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Customer ID",
  })
  @ForeignKey(()=>Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ApiProperty({
    example: "123 Main St",
    description: "Address",
  })
  @Column({
    type: DataType.TEXT,
  })
  address: string;

  @ApiProperty({
    example: "New York",
    description: "City",
  })
  @Column({
    type: DataType.STRING,
  })
  city: string;

  @ApiProperty({
    example: 10000,
    description: "Postal Code",
  })
  @Column({
    type: DataType.INTEGER,
  })
  postal_code: number;

  @ApiProperty({
    example: "12345",
    description: "Street",
  })
  @Column({
    type: DataType.STRING,
  })
  street: string;

  @ApiProperty({
    example: 123,
    description: "Flat Number",
  })
  @Column({
    type: DataType.INTEGER,
  })
  flat_number: number;

  @ApiProperty({
    example: 456,
    description: "House Number",
  })
  @Column({
    type: DataType.INTEGER,
  })
  house_number: number;

  @ApiProperty({
    example: "+1 123-456-7890",
    description: "Phone Number",
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @BelongsTo(() => Customer)
  customer: Customer;

  @HasMany(()=>Order)
  orders: Order[]
}
