import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherEntity } from 'src/db/entities/teacher.entity';
import { Repository } from 'typeorm';
import { TeacherDto } from './teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherEntity)
    private readonly teacherRepository: Repository<TeacherEntity>,
  ) {}

  async getAll(): Promise<TeacherDto[]> {
    const teachers = await this.teacherRepository.find();

    return teachers;
  }

  async getById(id: number): Promise<TeacherDto | null> {
    const teacher = await this.teacherRepository.findOne({ where: { id } });

    return teacher;
  }

  async create(teacher: TeacherDto): Promise<TeacherDto> {
    const newTeacher = await this.teacherRepository.save(teacher);

    return newTeacher;
  }

  async update(teacher: TeacherDto): Promise<TeacherDto | null> {
    const teacherAlredyExist = await this.getById(teacher.id);

    if(!teacherAlredyExist) return null;

    await this.teacherRepository.update(teacher.id, teacher);

    const updatedTeacher = await this.getById(teacher.id);

    return updatedTeacher;
  }

  async delete(id: number): Promise<TeacherDto | null> {
    const teacher = await this.getById(id);

    if(!teacher) return null;

    await this.teacherRepository.delete(id);


    return teacher;
  }

}
