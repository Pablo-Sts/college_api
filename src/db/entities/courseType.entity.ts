import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "course_type"})
export class CourseTypeEntity {

    @PrimaryGeneratedColumn({name: "id_course_type"})
    id: number;

    @Column({name: "tx_description"})
    description: string;
}