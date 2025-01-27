import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionEntity } from 'src/db/entities/institution.entity';
import { Repository } from 'typeorm';
import { InstitutionDto } from './institution.dto';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(InstitutionEntity)
    private readonly institutionRepository: Repository<InstitutionEntity>,
  ) {}

  async getAll(): Promise<InstitutionDto[]> {
    const institutions = await this.institutionRepository.find();

    return institutions;
  }

  async getById(id: number): Promise<InstitutionDto | null> {
    const institution = await this.institutionRepository.findOne({where: {id}});

    return institution;
  }

  async create(institution: InstitutionDto): Promise<InstitutionDto> {
    const newInstitution = await this.institutionRepository.save(institution);

    return newInstitution;
  }

  async update(institution: InstitutionDto): Promise<InstitutionDto | null> {
    const institutionAlredyExist = await this.getById(institution.id);

    if(!institutionAlredyExist) return null;

    await this.institutionRepository.update(institution.id, institution);

    const updatedInstitution = await this.getById(institution.id);

    return updatedInstitution;
  }

  async delete(id: number): Promise<InstitutionDto | null> {
    const institution = await this.getById(id);

    if(!institution) return null;

    await this.institutionRepository.delete(id);

    return institution;
  }
}
