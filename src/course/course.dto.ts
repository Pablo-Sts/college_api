import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CourseDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNumber()
  institutionId: number;

  @IsNumber()
  courseTypeId: number;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  description: string;
}
