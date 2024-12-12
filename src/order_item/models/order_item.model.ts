import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";
import { Product } from "../../product/models/product.model";

interface IOrderItemCreationAttr{
  orderId: number;
  productId: number;
  quantity: number;
}

@Table({tableName: "order_item"})
export class OrderItem extends Model<OrderItem,IOrderItemCreationAttr>{
  @ApiProperty({
    example: 1,
    description: "Order Item ID"
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id:number;

  @ApiProperty({
    example: 1,
    description: "Order ID"
  })
  @ForeignKey(()=>Order)
  @Column({
    type: DataType.INTEGER,
  })
  orderId: number;

  @ApiProperty({
    example: 1,
    description: "Product ID"
  })
  @ForeignKey(()=>Product)
  @Column({
    type: DataType.INTEGER,
  })
  productId: number;

  @ApiProperty({
    example: 5,
    description: "Quantity of the product"
  })
  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @BelongsTo(()=>Order)
  order: Order;

  @BelongsTo(()=>Product)
  product: Product;
}
