import { ApiProperty } from "@nestjs/swagger";

export class CreateTurnoDto {
    @ApiProperty()
    doctorId: number;
  
    @ApiProperty()
    pacienteId: number;
      
    @ApiProperty()
    fechaSolicitud: Date;

    @ApiProperty()
    fechaTurno: Date;

    @ApiProperty()
    estado: string;
}