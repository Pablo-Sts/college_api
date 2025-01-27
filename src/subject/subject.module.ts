import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/db/entities/subject.entity';

@Module({
  controllers: [SubjectController],
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  providers: [SubjectService]
})
export class SubjectModule {}
