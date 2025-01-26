import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "subject_type"})
export class SubjectTypeEntity {
    @PrimaryGeneratedColumn({name: "id_subject_type"})
    id: number;

    @Column({name: "tx_description"})
    description: string;
}