import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstructEntity } from 'src/db/entities/instruct.entity';
import { Repository } from 'typeorm';
import { InstructDto } from './instruct.dto';

@Injectable()
export class InstructService {
  constructor(
    @InjectRepository(InstructEntity)
    private readonly instructRepository: Repository<InstructEntity>,
  ) {}

  async getAll(): Promise<InstructDto[]> {
    const intructs = await this.instructRepository.find();

    return intructs;
  }

  async getByTeacher(teacherId: number): Promise<InstructDto[] | null> {
    const instructsByTeacher = await this.instructRepository.find({
      where: { teacherId },
    });

    return instructsByTeacher;
  }

  async getBySubject(subjectId: number): Promise<InstructDto[] | null> {
    const instructBySubject = await this.instructRepository.find({
      where: { subjectId },
    });

    return instructBySubject;
  }

  async create(instruct: InstructDto): Promise<InstructDto> {
    const newInstruct = await this.instructRepository.save(instruct);

    return newInstruct;
  }

  async update(
    instruct: InstructDto,
    newInstruct: InstructDto,
  ): Promise<InstructDto | null> {
    const instructAlredyExists = await this.instructRepository.findOne({
      where: instruct,
    });

    if (!instructAlredyExists) return null;

    await this.instructRepository.update(instruct, newInstruct);

    return newInstruct;
  }

  async delete(instruct: InstructDto): Promise<InstructDto | null> {
    const instructAlredyExists = await this.instructRepository.findOne({
      where: instruct,
    });

    if (!instructAlredyExists) return null;

    await this.instructRepository.delete(instruct);

    return instruct;
  }
}
