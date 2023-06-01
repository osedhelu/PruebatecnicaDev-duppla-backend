import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ComicsTables } from './ComicsTables.entity';

@Entity('creators')
export class CreatorTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @ManyToMany(() => ComicsTables, (comic) => comic.creators)
  @JoinTable({ name: 'creator_comic' })
  comics: ComicsTables[];
}
