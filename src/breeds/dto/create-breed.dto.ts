import { IsString, MinLength } from 'class-validator';

export class CreateBreedDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  lastName: string;
}
