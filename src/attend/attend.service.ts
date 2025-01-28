import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendDto } from './attend.dto';
import { Repository } from 'typeorm';
import { AttendEntity } from 'src/db/entities/attend.entity';

@Injectable()
export class AttendService {
  constructor(
    @InjectRepository(AttendEntity)
    private readonly attendRepository: Repository<AttendEntity>,
  ) {}

  async getAll(): Promise<AttendDto[]> {
    const attends = await this.attendRepository.find();

    return attends;
  }

  async getByStudent(studentId: number): Promise<AttendDto[]> {
    const attendByStudent = await this.attendRepository.find({
      where: { studentId },
    });

    return attendByStudent;
  }

  async getBySubject(subjectId: number): Promise<AttendDto[]> {
    const attendBySubject = await this.attendRepository.find({
      where: { subjectId },
    });

    return attendBySubject;
  }

  async getByYear(year: number): Promise<AttendDto[]> {
    const attendByYear = await this.attendRepository.find({ where: { year } });

    return attendByYear;
  }

  async getBySemester(semester: number): Promise<AttendDto[]> {
    const attendBySemester = await this.attendRepository.find({
      where: { semester },
    });

    return attendBySemester;
  }

  async create(attend: AttendDto): Promise<AttendDto | null> {
    const attendAlredyExists = await this.attendRepository.findOne({
      where: attend,
    });

    if (attendAlredyExists) return null;

    const createdAttend = await this.attendRepository.save(attend);

    return createdAttend;
  }

  async update(
    attend: AttendDto,
    newAttend: AttendDto,
  ): Promise<AttendDto | null> {
    const attendAlredyExists = await this.attendRepository.findOne({
      where: attend,
    });

    if (!attendAlredyExists) return null;

    await this.attendRepository.update(attend, newAttend);

    return newAttend;
  }

  async delete(attend: AttendDto): Promise<AttendDto | null> {
    const attendAlredyExists = await this.attendRepository.findOne({
        where: attend,
      });

    if (!attendAlredyExists) return null;

    await this.attendRepository.delete(attend);

    return attend;
  }
}
