import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/db/entities/course.entity';

@Module({
  controllers: [CourseController],
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CourseService]
})
export class CourseModule {}
