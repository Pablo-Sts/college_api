import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseTypeDto } from './course_type.dto';
import { CourseTypeEntity } from 'src/db/entities/courseType.entity';

@Injectable()
export class CourseTypeService {
  constructor(
    @InjectRepository(CourseTypeEntity)
    private readonly courseTypeRepository: Repository<CourseTypeEntity>,
  ) {}

  async getAll(): Promise<CourseTypeDto[]> {
    const courseTypes = await this.courseTypeRepository.find();

    return courseTypes;
  }

  async getById(id: number): Promise<CourseTypeDto | null> {
    const courseType = await this.courseTypeRepository.findOne({where: {id}});

    return courseType;
  }

  async create(courseType: CourseTypeDto): Promise<CourseTypeDto> {
    const newCourseType = await this.courseTypeRepository.save(courseType);

    return newCourseType;
  }

  async update(courseType: CourseTypeDto): Promise<CourseTypeDto | null> {
    const courseTypeAlredyExist = await this.getById(courseType.id);

    if(!courseTypeAlredyExist) return null;

    await this.courseTypeRepository.update(courseType.id, courseType);

    const updatedCourseType = this.getById(courseType.id);

    return updatedCourseType;
  }

  async delete(id: number): Promise<CourseTypeDto | null> {
    const courseType = await this.getById(id);

    if(!courseType) return null;

    await this.courseTypeRepository.delete(id);

    return courseType;
  }
}
