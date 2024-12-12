import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { CartItem } from "../../cart_item/models/cart_item.model";

interface ICartCreationAttr{
  customerId: number;
  status: 'yangi' | 'jarayonda' | 'tugallangan';
}

@Table({tableName: "cart"})
export class Cart extends Model<Cart,ICartCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @ForeignKey(()=>Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @Column({
    type: DataType.ENUM('yangi','jarayonda','tugallangan')
  })
  status: string;

  @BelongsTo(()=>Customer)
  customer: Customer;

  @HasMany(()=>CartItem)
  cartItems: CartItem[];
}
