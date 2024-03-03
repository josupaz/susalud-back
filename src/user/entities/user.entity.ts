import {
  Column,
  Entity,
} from 'typeorm';
import { Role } from '../../common/enums/rol.enum';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: 'enum', default: Role.USER_EXTERNO, enum: Role })
  role: Role;

  @Column({ default: 'HA'})
  estado: string;

  @Column({ default: '0'})
  cantidad_intentos_login: number;

}
