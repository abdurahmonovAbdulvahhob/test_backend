import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShipperService } from './shipper.service';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { AdminGuard } from '../common/guards';

@UseGuards(AdminGuard)
@Controller('shipper')
export class ShipperController {
  constructor(private readonly shipperService: ShipperService) {}

  @Post('create')
  create(@Body() createShipperDto: CreateShipperDto) {
    return this.shipperService.create(createShipperDto);
  }

  @Get('get')
  findAll() {
    return this.shipperService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.shipperService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateShipperDto: UpdateShipperDto) {
    return this.shipperService.update(+id, updateShipperDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.shipperService.remove(+id);
  }
}
