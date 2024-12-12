import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IProductCategoryCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'product_category' })
export class ProductCategory extends Model<
  ProductCategory,
  IProductCategoryCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: 'Product Category ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'cake',
    description: 'description about the cake',
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: 'about cake',
    description: 'description about the cake description',
  })
  @Column({
    type: DataType.STRING(1000),
  })
  description: string;
}
