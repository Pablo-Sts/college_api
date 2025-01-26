import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/db/entities/student.entity';

@Module({
  controllers: [StudentController],
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentService, Repository]
})
export class StudentModule {}
