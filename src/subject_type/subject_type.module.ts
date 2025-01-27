import { Module } from '@nestjs/common';
import { SubjectTypeController } from './subject_type.controller';
import { SubjectTypeService } from './subject_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectTypeEntity } from 'src/db/entities/subjectType.entity';

@Module({
  controllers: [SubjectTypeController],
  imports: [TypeOrmModule.forFeature([SubjectTypeEntity])],
  providers: [SubjectTypeService]
})
export class SubjectTypeModule {}
