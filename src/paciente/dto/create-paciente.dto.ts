import { ApiProperty } from "@nestjs/swagger";

export class CreatePacienteDto {
    @ApiProperty()
    userId: number;
  
    @ApiProperty()
    numeroAsociado: number;
      
    @ApiProperty()
    estado?: string;
}
