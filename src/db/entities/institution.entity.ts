import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'institution' })
export class InstitutionEntity {
  @PrimaryGeneratedColumn({ name: 'id_institution' })
  id: number;

  @Column({ name: 'tx_acronym' })
  acronym: string;

  @Column({ name: 'tx_description' })
  description: string;
}
