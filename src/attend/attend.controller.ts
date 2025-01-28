import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AttendService } from './attend.service';
import { AttendDto } from './attend.dto';

@Controller('attend')
export class AttendController {
  constructor(private readonly attendService: AttendService) {}

  @Get()
  async getAll(): Promise<AttendDto[]> {
    const attends = await this.attendService.getAll();

    return attends;
  }

  @Get('/student/:id')
  async getByStudent(@Param('id') studentId: number): Promise<AttendDto[]> {
    const attendByStudent = await this.attendService.getByStudent(studentId);

    return attendByStudent;
  }

  @Get('/subject/:id')
  async getBySubject(@Param('id') subjectId: number): Promise<AttendDto[]> {
    const attendBySubject = await this.attendService.getBySubject(subjectId);

    return attendBySubject;
  }

  @Get('/year/:year')
  async getByYear(@Param('year') year: number): Promise<AttendDto[]> {
    const attendByYear = await this.attendService.getByYear(year);

    return attendByYear;
  }

  @Get('/semester/:semester')
  async getBySemester(
    @Param('semester') semester: number,
  ): Promise<AttendDto[]> {
    const attendBySemester = await this.attendService.getBySemester(semester);

    return attendBySemester;
  }

  @Post()
  async create(@Body() attend: AttendDto): Promise<AttendDto | null> {
    const createdAttend = await this.attendService.create(attend);

    return createdAttend;
  }

  @Put()
  async update(@Body() attends: AttendDto[]): Promise<AttendDto | null> {
    const updatedAttend = await this.attendService.update(
      attends[0],
      attends[1],
    );

    return updatedAttend;
  }

  @Delete()
  async delete(@Body() attend: AttendDto): Promise<AttendDto | null> {
    const deletedAttend = await this.attendService.delete(attend);

    return deletedAttend;
  }
}
