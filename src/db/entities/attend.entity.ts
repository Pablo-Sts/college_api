import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'attend' })
export class AttendEntity {
  @PrimaryColumn({ name: 'id_student' })
  studentId: number;

  @PrimaryColumn({ name: 'id_subject' })
  subjectId: number;

  @PrimaryColumn({ name: 'in_year' })
  year: number;

  @PrimaryColumn({ name: 'in_semester' })
  semester: number;

  @Column({ name: 'in_absence' })
  absence: number;

  @Column({ name: 'nm_grade1' })
  grade1: number;

  @Column({ name: 'nm_grade2' })
  grade2: number;

  @Column({ name: 'nm_grade3' })
  grade3: number;

  @Column({ name: 'bl_approved' })
  approved: boolean;
}
