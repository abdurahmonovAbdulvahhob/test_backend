import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { Product } from "../../product/models/product.model";

interface ICartItemCreationAttr{
  cartId: number;
  productId: number;
  quantity: number;
}

@Table({tableName: "cart_item"})
export class CartItem extends Model<CartItem,ICartItemCreationAttr>{
  @ApiProperty({
    example: 1,
    description: "Cart Item ID"
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Cart ID of the product"
  })
  @ForeignKey(()=>Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @ApiProperty({
    example: 1,
    description: "Product ID of the product"
  })
  @ForeignKey(()=>Product)
  @Column({
    type: DataType.INTEGER,
  })
  productId: number;

  @ApiProperty({
    example: 5,
    description: "Quantity of the product in the cart"
  })
  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @BelongsTo(()=>Cart)
  cart: Cart;

  @BelongsTo(()=>Product)
  product: Product;
}
