import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectDto } from './subject.dto';

@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) {}

    @Get()
    async getAll(): Promise<SubjectDto[]> {
        const subjects = await this.subjectService.getAll()

        return subjects;
    }

    @Get("/:id")
    async getById(@Param("id") id: number): Promise<SubjectDto | null> {
        const subject = await this.subjectService.getById(id);

        return subject;
    }

    @Get("/course/:id")
    async getByCourse(@Param("id") courseId: number): Promise<SubjectDto[]> {
        const subjectsByCourse = await this.subjectService.getByCourse(courseId);

        return subjectsByCourse;
    }

    @Post()
    async create(@Body() subject: SubjectDto): Promise<SubjectDto> {
        const newSubject = await this.subjectService.create(subject);

        return newSubject;
    }

    @Put()
    async update(@Body() subject: SubjectDto): Promise<SubjectDto | null> {
        if(!subject.id) return null;

        const updatedSubject = await this.subjectService.update(subject);

        return updatedSubject;
    }

    @Delete("/:id")
    async delete(@Param("id") id: number): Promise<SubjectDto | null> {
        const deletedSubject = await this.subjectService.delete(id);

        return deletedSubject;
    }
 }
