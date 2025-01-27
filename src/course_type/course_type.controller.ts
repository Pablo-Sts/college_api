import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseTypeService } from './course_type.service';
import { CourseTypeDto } from './course_type.dto';

@Controller('course-type')
export class CourseTypeController {
  constructor(private readonly courseTypeService: CourseTypeService) {}

  @Get()
  async getAll(): Promise<CourseTypeDto[]> {
    const courseTypes = await this.courseTypeService.getAll();

    return courseTypes;
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<CourseTypeDto | null> {
    const courseType = await this.courseTypeService.getById(id);

    return courseType;
  }

  @Post()
  async create(@Body() courseType: CourseTypeDto): Promise<CourseTypeDto> {
    const newCourseType = await this.courseTypeService.create(courseType);

    return newCourseType;
  }

  @Put()
  async update(@Body() courseType: CourseTypeDto): Promise<CourseTypeDto | null> {
    if(!courseType.id) return null;

    const updatedCourseType = await this.courseTypeService.update(courseType);

    return updatedCourseType;
  }

  @Delete("/:id") 
  async delete(@Param("id") id: number): Promise<CourseTypeDto | null> {
    const deletedCourseType = await this.courseTypeService.delete(id);

    return deletedCourseType;
  }
}
