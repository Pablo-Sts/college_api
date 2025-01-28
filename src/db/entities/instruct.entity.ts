import { Entity, PrimaryColumn } from "typeorm";

@Entity({name: "instruct"})
export class InstructEntity {

    @PrimaryColumn({name: "id_teacher"})
    teacherId: number;

    @PrimaryColumn({name: "id_subject"})
    subjectId: number;
}