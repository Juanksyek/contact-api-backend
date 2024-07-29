import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { Contact } from './contact/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'contact-db.sqlite',
      entities: [Contact],
      synchronize: true,
    }),
    ContactModule,
  ],
})
export class AppModule {}
