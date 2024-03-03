import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Turno } from './entities/turno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurnoService {


  constructor(
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
  ) {}

  async update(id: number, updateTurnoDto: UpdateTurnoDto): Promise<Turno> {
    const turno = await this.turnoRepository.findOneBy({ id: id });
    if (!turno) {
      throw new NotFoundException(`Turno con id ${id} no encontrado`);
    }

    // Actualizar el estado del turno
    turno.estado = updateTurnoDto.estado;
    turno.doctorId = updateTurnoDto.doctorId;
    turno.fechaTurno = updateTurnoDto.fechaTurno;

    // Guardar el turno actualizado en la base de datos
    return await this.turnoRepository.save(turno);
  }

  async remove(id: number): Promise<void> {
    await this.update(id, { estado: 'BA' });
  }

  
  create(createTurnoDto: CreateTurnoDto) {
      return this.turnoRepository.save(createTurnoDto);
  }

  findAll() {
    return `This action returns all turno`;
  }

  findOne(id: number) {
    return this.turnoRepository.findOneBy({ id: id });
  }
}
