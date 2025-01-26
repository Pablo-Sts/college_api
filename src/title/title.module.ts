import { Module } from '@nestjs/common';
import { TitleController } from './title.controller';
import { TitleService } from './title.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleEntity } from 'src/db/entities/title.entity';

@Module({
  controllers: [TitleController],
  imports: [TypeOrmModule.forFeature([TitleEntity])],
  providers: [TitleService]
})
export class TitleModule {}
