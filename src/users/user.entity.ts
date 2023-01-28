import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  PrimaryGeneratedColumn,
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('user created!');
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User Updated!');
  }

  @AfterRemove()
  logDelete() {
    console.log('User Deleted!');
  }
}
