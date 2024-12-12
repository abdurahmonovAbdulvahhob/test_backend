import { Injectable } from '@nestjs/common';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Shipper } from './models/shipper.model';

@Injectable()
export class ShipperService {
  constructor(@InjectModel(Shipper) private shipperModel: typeof Shipper) {}
  create(createShipperDto: CreateShipperDto) {
    return this.shipperModel.create(createShipperDto);
  }

  findAll() {
    return this.shipperModel.findAll();
  }

  findOne(id: number) {
    return this.shipperModel.findByPk(id);
  }

  update(id: number, updateShipperDto: UpdateShipperDto) {
    return this.shipperModel.update(updateShipperDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.shipperModel.destroy({where: {id}});
  }
}
