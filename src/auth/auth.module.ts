import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from '../admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { CustomerModule } from '../customer/customer.module';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [AdminModule, CustomerModule, MailModule,JwtModule.register({global:true})],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
