import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from 'src/db/entities/course.entity';
import { Repository } from 'typeorm';
import { CourseDto } from './course.dto';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(CourseEntity) private readonly courseRepository: Repository<CourseEntity>) {}

    async getAll(): Promise<CourseDto[]> {
        const courses = await this.courseRepository.find();

        return courses;
    }

    async getById(id: number): Promise<CourseDto | null> {
        const course = await this.courseRepository.findOne({where: {id}});

        return course;
    }

    async create(course: CourseDto): Promise<CourseDto> {
        const newCourse = await this.courseRepository.save(course);

        return newCourse;
    }

    async update(course: CourseDto): Promise<CourseDto | null> {
        const courseAlredyExist = await this.getById(course.id);

        if(!courseAlredyExist) return null;

        await this.courseRepository.update(course.id, course);

        const updatedCourse = await this.getById(course.id);

        return updatedCourse;
    }

    async delete(id: number): Promise<CourseDto | null> {
        const course = await this.getById(id);

        if(!course) return null;

        await this.courseRepository.delete(id);

        return course;
    }
}
