import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminGuard, UserGuard } from '../common/guards';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: 'Creating user' })
  @ApiResponse({
    status: 200,
    description: 'Create user',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Post('create')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: 'get all user' })
  @ApiResponse({
    status: 200,
    description: 'get user',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Get('get')
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: 'get 1 user' })
  @ApiResponse({
    status: 200,
    description: 'get 1  user',
    type: Object,
  })
  @UseGuards(UserGuard)
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({ summary: 'update user' })
  @ApiResponse({
    status: 200,
    description: 'update user',
    type: Object,
  })
  @UseGuards(UserGuard)
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: 'delete user' })
  @ApiResponse({
    status: 200,
    description: 'delete user',
    type: Object,
  })
  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }

  @Get('activate/:link')
  async activateUser(@Param('link') link: string) {
    return this.customerService.activateUser(link);
  }
}
