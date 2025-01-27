import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class SubjectDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNumber()
  courseId: number;

  @IsNumber()
  subjectTypeId: number;

  @IsString()
  @MinLength(2)
  @MaxLength(10)
  acronym: string;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  description: string;

  @IsNumber()
  @Min(1)
  period: number;

  @IsNumber()
  @Min(40)
  workload: number;
}
