import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from '../../order/models/order.model';
import { PaymentMethod } from '../../payment_method/models/payment_method.model';

interface IPaymentCreationAttr {
  orderId: number;
  payment_methodId: number;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  transaction_date: string;
}

@Table({ tableName: 'payment' })
export class Payment extends Model<Payment, IPaymentCreationAttr> {
  @ApiProperty({
    example: 1,
    description: 'Payment ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'Order ID',
  })
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
  })
  orderId: number;

  @ApiProperty({
    example: 1,
    description: 'Payment Method ID',
  })
  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
  })
  payment_methodId: number;

  @ApiProperty({
    example: 5,
    description: 'amount of the payment',
  })
  @Column({
    type: DataType.INTEGER,
  })
  amount: number;

  @ApiProperty({
    example: 'pending',
    description: 'status of the payment',
  })
  @Column({
    type: DataType.ENUM('pending' , 'completed' , 'failed' , 'cancelled'),
  })
  status: string;

  @ApiProperty({
    example: '17.02.2003',
    description: 'date of the payment',
  })
  @Column({
    type: DataType.DATEONLY,
  })
  transaction_date: string;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => PaymentMethod)
  payment_method: PaymentMethod;
}
