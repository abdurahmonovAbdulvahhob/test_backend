import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartItemService } from './cart_item.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';

@Controller('cart-item')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post('create')
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.create(createCartItemDto);
  }

  @Get('get')
  findAll() {
    return this.cartItemService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemService.update(+id, updateCartItemDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.cartItemService.remove(+id);
  }
}
