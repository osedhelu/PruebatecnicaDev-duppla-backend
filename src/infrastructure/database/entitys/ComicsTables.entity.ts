import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CreatorTable } from './CreatorTable.entity';

@Entity('comics')
export class ComicsTables {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  @Index('IDX_UNIQUE_ID_COMICS', { unique: true }) // Añade este decorador para indicar que la columna 'idComics' debe ser única
  idComics: string;

  @Column()
  image: string;

  @Column('simple-array')
  images: string[];

  @ManyToMany(() => CreatorTable, (creator) => creator.comics)
  creators: CreatorTable[];

  @Column('text')
  series: string;

  @Column()
  year: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
