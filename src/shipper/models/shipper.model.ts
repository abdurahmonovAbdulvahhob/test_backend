import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Order } from '../../order/models/order.model';

interface IShipperCreationAttr {
  name: string;
  phone: string;
  email: string;
}

@Table({ tableName: 'shipper' })
export class Shipper extends Model<Shipper, IShipperCreationAttr> {
  @ApiProperty({
    example: 1,
    description: 'Shipper ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'ali',
    description: "Shipper's name",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: 'ali123@gmail.com',
    description: "Shipper's email",
  })
  @Column({
    type: DataType.STRING(100),
  })
  email: string;

  @ApiProperty({
    example: '+998900084393',
    description: "Shipper's phone number",
  })
  @Column({
    type: DataType.STRING(1000),
  })
  phone: string;

  @HasMany(()=>Order)
  orders: Order[]
}
