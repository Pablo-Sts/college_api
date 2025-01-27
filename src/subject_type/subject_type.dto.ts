import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SubjectTypeDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  description: string;
}
