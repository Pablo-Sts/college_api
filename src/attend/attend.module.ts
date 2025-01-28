import { Module } from '@nestjs/common';
import { AttendController } from './attend.controller';
import { AttendService } from './attend.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendEntity } from 'src/db/entities/attend.entity';

@Module({
  controllers: [AttendController],
  imports: [TypeOrmModule.forFeature([AttendEntity])],
  providers: [AttendService]
})
export class AttendModule {}
