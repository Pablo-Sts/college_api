import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InstructService } from './instruct.service';
import { InstructDto } from './instruct.dto';

@Controller('instruct')
export class InstructController {
    constructor(private readonly instructService: InstructService) {}

    @Get()
    async getAll(): Promise<InstructDto[]> {
        const instructs = await this.instructService.getAll();

        return instructs;
    }

    @Get("/teacher/:id")
    async getByTeacher(@Param("id") teacherId: number): Promise<InstructDto[] | null> {
        const instructByTeacher = await this.instructService.getByTeacher(teacherId);

        return instructByTeacher;
    }

    @Get("/subject/:id")
    async getBySubject(@Param("id") subjectId: number): Promise<InstructDto[] | null> {
        const instructBySubject = await this.instructService.getBySubject(subjectId);

        return instructBySubject;
    }

    @Post()
    async create(@Body() instruct: InstructDto): Promise<InstructDto | null> {
        const newInstruct = await this.instructService.create(instruct);

        return newInstruct;
    }

    @Put()
    async update(@Body() instructs: InstructDto[]): Promise<InstructDto | null> {
        const updateInstruct = await this.instructService.update(instructs[0], instructs[1]);

        return updateInstruct;
    }

    @Delete()
    async delete(@Body() instruct: InstructDto): Promise<InstructDto | null> {
        const deletedInstruct = await this.instructService.delete(instruct);

        return deletedInstruct;
    }
}
