import { IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class InstitutionDto {
    @IsNumber()
    @IsOptional()
    @Min(1)
    id: number;

    @IsString()
    @MinLength(3)
    @MaxLength(15)
    acronym: string;

    @IsString()
    @MinLength(3)
    @MaxLength(150)
    description: string;
}