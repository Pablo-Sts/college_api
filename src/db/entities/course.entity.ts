import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "course"})
export class CourseEntity {
    
    @PrimaryGeneratedColumn({name: "id_course"})
    id: number;

    @Column({name: "id_institution"})
    institutionId: number;

    @Column({name: "id_course_type"})
    courseTypeId: number;

    @Column({name: "tx_description"})
    description: string;
}