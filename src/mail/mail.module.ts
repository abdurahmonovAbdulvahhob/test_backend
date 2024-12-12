import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { join } from 'path';


@Module({
  imports: [MailerModule.forRootAsync({
    useFactory: async(config:ConfigService) => ({
      transport: {
        host: config.get<string>('SMTP_HOST'),
        port: config.get('SMTP_PORT'),
        secure: true,
        auth: {
          user: config.get<string>('SMTP_USER'),
          pass: config.get<string>('SMTP_PASSWORD'),
        },
      },
      defaults: {
        from: `"TastyUz" ${config.get<string>('SMTP_HOST')}`,
      },
      template: {
        dir: join(__dirname, "templates"),
        adapter: new HandlebarsAdapter(),
        template: "confirm",
        options: {
          strict: true,
        },
      },
    }),
    inject: [ConfigService]
  })],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
