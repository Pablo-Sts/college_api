import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "title"})
export class TitleEntity {

    @PrimaryGeneratedColumn({name: "id_title"})
    id: number;

    @Column({name: "tx_description"})
    description: string;
}