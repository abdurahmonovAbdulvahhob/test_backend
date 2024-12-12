import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { AdminGuard } from '../common/guards';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('payment-method')
@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({ summary: 'create new payment method' })
  @ApiResponse({
    status: 201,
    description: 'created',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Post('create')
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({ summary: 'get all payment method' })
  @ApiResponse({
    status: 201,
    description: 'getall',
    type: Object,
  })
  @Get('get')
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({ summary: 'get  payment method' })
  @ApiResponse({
    status: 201,
    description: 'get',
    type: Object,
  })
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @ApiOperation({ summary: 'update  payment method' })
  @ApiResponse({
    status: 201,
    description: 'update',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,
  ) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation({ summary: 'delete  payment method' })
  @ApiResponse({
    status: 201,
    description: 'delete',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
