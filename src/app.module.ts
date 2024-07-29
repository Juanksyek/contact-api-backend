import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { ContacService } from './contac/contac.service';

@Module({
  imports: [ContactModule],
  controllers: [AppController],
  providers: [AppService, ContacService],
})
export class AppModule {}
