import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
import { User } from "src/user/entities/user.entity";

@Entity()
export class Paciente {
    @Column({ primary: true, generated: true })
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id'  })
    user: User;
  
    @Column()
    userId: number;
  
    @Column({ default: '0'})
    numeroAsociado: number;

    @Column({ default: 'HA'})
    estado: string;
}