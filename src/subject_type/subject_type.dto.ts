import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class SubjectTypeDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  id: number;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  description: string;
}
