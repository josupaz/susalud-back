import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Entity()
export class Turno {
    @Column({ primary: true, generated: true })
    id: number;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctorId', referencedColumnName: 'id'  })
    doctor: Doctor;
  
    @Column()
    doctorId: number;

    @ManyToOne(() => Paciente)
    @JoinColumn({ name: 'pacienteId', referencedColumnName: 'id'  })
    paciente: Paciente;
  
    @Column()
    pacienteId: number;
  
    @Column()
    fechaSolicitud: Date;

    @Column()
    fechaTurno: Date;

    @Column({ default: 'HA'})
    estado: string;
}