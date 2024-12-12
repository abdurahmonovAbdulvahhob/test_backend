import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { CreatorStrategy } from '../common/strategies/creator.strategy';
import { AdminSelfStrategy } from '../common/strategies';


@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  exports: [AdminService],
  controllers: [AdminController],
  providers: [AdminService,CreatorStrategy,AdminSelfStrategy],
})
export class AdminModule {}
