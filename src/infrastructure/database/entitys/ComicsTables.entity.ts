import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ComicsTables {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({
    type: 'text',
    default: 'in_process',
  })
  state: any;
}
