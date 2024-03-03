import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  cantidad_intentos_login?: number;

  @ApiProperty()
  estado?: string;
}
