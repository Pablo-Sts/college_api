import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionDto } from './institution.dto';

@Controller('institution')
export class InstitutionController {
    constructor(private readonly institutionService: InstitutionService) {}

    @Get()
    async getAll(): Promise<InstitutionDto[]> {
        const institutions = await this.institutionService.getAll();

        return institutions;
    }

    @Get("/:id")
    async getById(@Param("id") id: number): Promise<InstitutionDto | null> {
        const institution = await this.institutionService.getById(id);

        return institution;
    }

    @Post()
    async create(@Body() institution: InstitutionDto): Promise<InstitutionDto> {
        const newInstitution = await this.institutionService.create(institution);

        return newInstitution;
    }

    @Put()
    async update(@Body() institution: InstitutionDto): Promise<InstitutionDto | null> {
        if(!institution.id) return null;
        
        const updatedInstitution = await this.institutionService.update(institution);

        return updatedInstitution;
    }

    @Delete("/:id")
    async delete(@Param("id") id: number) {
        const deletedInstitution = await this.institutionService.delete(id);

        return deletedInstitution;
    }
}
