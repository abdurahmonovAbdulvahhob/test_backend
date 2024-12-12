import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderAddressService } from './order_address.service';
import { CreateOrderAddressDto } from './dto/create-order_address.dto';
import { UpdateOrderAddressDto } from './dto/update-order_address.dto';

@Controller('order-address')
export class OrderAddressController {
  constructor(private readonly orderAddressService: OrderAddressService) {}

  @Post('create')
  create(@Body() createOrderAddressDto: CreateOrderAddressDto) {
    return this.orderAddressService.create(createOrderAddressDto);
  }

  @Get('get')
  findAll() {
    return this.orderAddressService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.orderAddressService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateOrderAddressDto: UpdateOrderAddressDto) {
    return this.orderAddressService.update(+id, updateOrderAddressDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.orderAddressService.remove(+id);
  }
}
