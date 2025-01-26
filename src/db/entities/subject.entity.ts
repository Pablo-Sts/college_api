import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "subject"})
export class SubjectEntity {

    @PrimaryGeneratedColumn({name: "id_subject"})
    id: number;

    @Column({name: "id_course"})
    courseId: number;

    @Column({name: "id_subject_type"})
    subjectTypeId: number;

    @Column({name: "tx_acronym"})
    acronym: string;

    @Column({name: "tx_description"})
    description: string;

    @Column({name: "in_period"})
    period: number

    @Column({name: "in_workload"})
    workload: number;
}