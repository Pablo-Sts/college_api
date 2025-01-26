import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'student' })
export class StudentEntity {
  @PrimaryGeneratedColumn({ name: 'id_student' })
  id: number;

  @Column({ type: 'varchar', length: 100, name: 'tx_name' })
  name: string;

  @Column({ type: 'char', length: 1, name: "tx_sex" })
  sex: string;

  @Column({ type: 'date', name: "dt_birth" })
  birthDate: Date;
}
