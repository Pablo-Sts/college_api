import { Module } from '@nestjs/common';
import { CourseTypeController } from './course_type.controller';
import { CourseTypeService } from './course_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseTypeEntity } from 'src/db/entities/courseType.entity';

@Module({
  controllers: [CourseTypeController],
  imports: [TypeOrmModule.forFeature([CourseTypeEntity])],
  providers: [CourseTypeService]
})
export class CourseTypeModule {}
