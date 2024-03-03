import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto{
    @ApiProperty()
    userId: number;
  
    @ApiProperty()
    legajo: number;
      
    @ApiProperty()
    estado?: string;
}