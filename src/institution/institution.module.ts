import { Module } from '@nestjs/common';
import { InstitutionController } from './institution.controller';
import { InstitutionService } from './institution.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionEntity } from 'src/db/entities/institution.entity';

@Module({
  controllers: [InstitutionController],
  imports: [TypeOrmModule.forFeature([InstitutionEntity])],
  providers: [InstitutionService]
})
export class InstitutionModule {}
