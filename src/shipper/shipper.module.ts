import { Module } from '@nestjs/common';
import { ShipperService } from './shipper.service';
import { ShipperController } from './shipper.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shipper } from './models/shipper.model';
import { AdminGuard } from '../common/guards';

@Module({
  imports: [SequelizeModule.forFeature([Shipper])],
  controllers: [ShipperController],
  providers: [ShipperService,AdminGuard],
})
export class ShipperModule {}
