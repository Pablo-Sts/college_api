import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/db/entities/student.entity';
import { DeleteResult, Repository } from 'typeorm';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async getAll(): Promise<StudentDto[]> {
    const data = await this.studentRepository.find();

    if (!data) {
      return [];
    }

    const students: StudentDto[] = data.map((student: StudentEntity) => {
      return {
        id: student.id,
        name: student.name,
        sex: student.sex,
        birthDate: student.birthDate,
      } as StudentDto;
    });

    return students;
  }

  async getById(id: number): Promise<StudentDto | null> {
    const student = await this.studentRepository.findOne({
      where: { id },
    });

    return student;
  }

  async create(student: StudentDto): Promise<StudentDto> {
    const newStudent = await this.studentRepository.save(student);

    return newStudent;
  }

  async delete(id: number): Promise<StudentDto | null> {
    const student = await this.getById(id);
    
    if (!student) return null;
      
    await this.studentRepository.delete(id);

    return student;
  }

  async update(student: StudentDto): Promise<StudentDto | null> {
    const studendAlredyExist = await this.getById(student.id);
    
    if (!studendAlredyExist) return null;

    await this.studentRepository.update(student.id, student);

    const updatedStudent = await this.getById(student.id)

    return updatedStudent;
  }
}
