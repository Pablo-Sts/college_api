import { Module } from '@nestjs/common';
import { InstructController } from './instruct.controller';
import { InstructService } from './instruct.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructEntity } from 'src/db/entities/instruct.entity';

@Module({
  controllers: [InstructController],
  imports: [TypeOrmModule.forFeature([InstructEntity])],
  providers: [InstructService]
})
export class InstructModule {}
