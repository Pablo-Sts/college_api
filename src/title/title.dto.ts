import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class TitleDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  id: number;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  description: string;
}
