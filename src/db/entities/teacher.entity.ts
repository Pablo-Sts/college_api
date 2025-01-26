import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "teacher"})
export class TeacherEntity {

    @PrimaryGeneratedColumn({name: "id_teacher"})
    id: number;

    @Column({name:"id_title"})
    titleId: number;

    @Column({name: "tx_name"})
    name: string;

    @Column({name: "tx_sex"})
    sex: string;

    @Column({name: "tx_civil_status"})
    civilStatus: string;

    @Column({name: "dt_birth"})
    birthDate: Date;

    @Column({name: "tx_phone"})
    phoneNumber: string;
}