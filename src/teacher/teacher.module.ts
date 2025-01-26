import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { TeacherEntity } from 'src/db/entities/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TeacherController],
  imports: [TypeOrmModule.forFeature([TeacherEntity])],
  providers: [TeacherService]
})
export class TeacherModule {}
