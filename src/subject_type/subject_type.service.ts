import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectTypeEntity } from 'src/db/entities/subjectType.entity';
import { Repository } from 'typeorm';
import { SubjectTypeDto } from './subject_type.dto';

@Injectable()
export class SubjectTypeService {
  constructor(
    @InjectRepository(SubjectTypeEntity)
    private readonly subjectTypeRepository: Repository<SubjectTypeEntity>,
  ) {}

  async getAll(): Promise<SubjectTypeDto[]> {
    const subjectTypes = await this.subjectTypeRepository.find();

    return subjectTypes;
  }

  async getById(id: number): Promise<SubjectTypeDto | null> {
    const subjectType = await this.subjectTypeRepository.findOne({where: {id}});

    return subjectType;
  }

  async create(subjectType: SubjectTypeDto): Promise<SubjectTypeDto> {
    const newSubjectType = await this.subjectTypeRepository.save(subjectType);

    return newSubjectType;
  }

  async update(subjectType: SubjectTypeDto): Promise<SubjectTypeDto | null> {
    const subjectTypeAlredyExist = await this.getById(subjectType.id);

    if(!subjectTypeAlredyExist) return null;

    await this.subjectTypeRepository.update(subjectType.id, subjectType);

    const updatedSubjectType = await this.getById(subjectType.id);

    return updatedSubjectType;
  }

  async delete(id: number): Promise<SubjectTypeDto | null> {
    const subjectType = await this.getById(id);

    if(!subjectType) return null;

    await this.subjectTypeRepository.delete(id);

    return subjectType;
  }
}
