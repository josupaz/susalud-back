import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
import { User } from "src/user/entities/user.entity";

@Entity()
export class Doctor{
    @Column({ primary: true, generated: true })
    id: number;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: User;
  
    @Column()
    userId: number;

    @Column()
    legajo: number;

    @Column()
    estado: string;
}
