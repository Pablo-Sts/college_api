import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAll(): Promise<StudentDto[]> {
    const students = await this.studentService.getAll();
    return students;
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<StudentDto | null> {
    const student = await this.studentService.getById(+id);
    return student;
  }

  @Post()
  async create(@Body() student: StudentDto): Promise<StudentDto> {
    const newStudent = await this.studentService.create(student);

    return newStudent;
  }

  @Put()
  async update(@Body() student: StudentDto): Promise<StudentDto | null> {
    const updatedStudent = await this.studentService.update(student);

    return updatedStudent;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<StudentDto | null> {
    const deletedStudent = await this.studentService.delete(+id);

    return deletedStudent;
  }
}
