import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubjectTypeService } from './subject_type.service';
import { SubjectTypeDto } from './subject_type.dto';

@Controller('subject-type')
export class SubjectTypeController {
    constructor(private readonly subjectTypeService: SubjectTypeService) {}

    @Get()
    async getAll(): Promise<SubjectTypeDto[]> {
        const subjectTypes = await this.subjectTypeService.getAll();

        return subjectTypes;
    }

    @Get("/:id")
    async getById(@Param("id") id: number): Promise<SubjectTypeDto | null> {
        const subjectType = await this.subjectTypeService.getById(id);

        return subjectType;
    }

    @Post()
    async create(@Body() subjectType: SubjectTypeDto): Promise<SubjectTypeDto> {
        const newSubjectType = await this.subjectTypeService.create(subjectType);

        return newSubjectType;
    }

    @Put()
    async update(@Body() subjectType: SubjectTypeDto): Promise<SubjectTypeDto | null> {
        if(!subjectType.id) return null;

        const updatedSubjectType = await this.subjectTypeService.update(subjectType);

        return updatedSubjectType;
    }

    @Delete("/:id")
    async delete(@Param("id") id: number): Promise<SubjectTypeDto | null> {
        const deletedSubjectType = await this.subjectTypeService.delete(id);

        return deletedSubjectType;
    }
}
