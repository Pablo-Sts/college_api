import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherDto } from './teacher.dto';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    async getAll(): Promise<TeacherDto[]> {
        const teachers = await this.teacherService.getAll();

        return teachers;
    }

    @Get("/:id")
    async getById(@Param("id") id: string): Promise<TeacherDto | null> {
        const teacher = await this.teacherService.getById(+id);

        return teacher;
    }

    @Post()
    async create(@Body() teacher: TeacherDto): Promise<TeacherDto> {
        const newTeacher = await this.teacherService.create(teacher);

        return newTeacher;
    }

    @Put()
    async update(@Body() teacher: TeacherDto): Promise<TeacherDto | null> {
        const updatedTeacher = await this.teacherService.update(teacher);

        return updatedTeacher;
    }

    @Delete("/:id")
    async delete(@Param("id") id: string): Promise<TeacherDto | null> {
        const deletedTeacher = await this.teacherService.delete(+id);

        return deletedTeacher;  
    }
}
