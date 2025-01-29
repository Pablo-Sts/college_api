import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/db/entities/subject.entity';
import { Repository } from 'typeorm';
import { SubjectDto } from './subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}

  async getAll(): Promise<SubjectDto[]> {
    const subjects = await this.subjectRepository.find();
    
    return subjects;
  }

  async getById(id: number): Promise<SubjectDto | null> {
    const subject = await this.subjectRepository.findOne({where: {id}});

    return subject;
  }

  async getByCourse(courseId: number): Promise<SubjectDto[]> {
    const subjectsByCourse = await this.subjectRepository.find({where: {courseId}});

    return subjectsByCourse;
  }

  async create(subject: SubjectDto): Promise<SubjectDto> {
    const newSubject = await this.subjectRepository.save(subject);

    return newSubject;
  }

  async update(subject: SubjectDto): Promise<SubjectDto | null> {
    const subjectAlredyExist = await this.getById(subject.id);

    if(!subjectAlredyExist) return null;

    await this.subjectRepository.update(subject.id, subject);

    const updatedSubject = this.getById(subject.id);

    return updatedSubject;
  }

  async delete(id: number): Promise<SubjectDto | null> {
    const subject = await this.getById(id);

    if(!subject) return null;

    await this.subjectRepository.delete(id);

    return subject;
  }
}
