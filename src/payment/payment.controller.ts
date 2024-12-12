import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { AdminGuard } from '../common/guards';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation({ summary: 'Create new payment' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Post('create')
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @ApiOperation({ summary: 'get all payment' })
  @ApiResponse({
    status: 201,
    description: 'getall',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Get('get')
  findAll() {
    return this.paymentService.findAll();
  }

  @ApiOperation({ summary: 'get 1 payment' })
  @ApiResponse({
    status: 201,
    description: 'get',
    type: Object,
  })
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @ApiOperation({ summary: 'update  payment' })
  @ApiResponse({
    status: 201,
    description: 'update',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @ApiOperation({ summary: 'delete  payment' })
  @ApiResponse({
    status: 201,
    description: 'delete',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
