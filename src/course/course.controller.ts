import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseServise: CourseService) {}

    @Get()
    async getAll(): Promise<CourseDto[]> {
        const courses = await this.courseServise.getAll();

        return courses;
    }

    @Get("/:id")
    async getById(@Param("id") id: number): Promise<CourseDto | null> {
        const course = await this.courseServise.getById(id);

        return course;
    }

    @Post()
    async create(@Body() course: CourseDto): Promise<CourseDto> {
        const newCourse = await this.courseServise.create(course);

        return newCourse;
    }

    @Put()
    async update(@Body() course: CourseDto): Promise<CourseDto | null> {
        if(!course.id) return null;

        const updatedCourse = await this.courseServise.update(course);

        return updatedCourse;
    }

    @Delete("/:id")
    async delete(@Param("id") id: number): Promise<CourseDto | null> {
        const deletedCourse = this.courseServise.delete(id);

        return deletedCourse;
    }
}
