import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IPaymentMethodCreationAttr {
  method_name: string;
  description: string;
}

@Table({ tableName: 'payment_method' })
export class PaymentMethod extends Model<
  PaymentMethod,
  IPaymentMethodCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: 'Payment Method ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'cash',
    description: 'description about the transaction method',
  })
  @Column({
    type: DataType.STRING(100),
  })
  method_name: string;

  @ApiProperty({
    example: 'about cash',
    description: 'description about the transaction method description',
  })
  @Column({
    type: DataType.STRING(1000),
  })
  description: string;
}
