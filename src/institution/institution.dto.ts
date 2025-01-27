import { IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class InstitutionDto {
    @IsNumber()
    @IsOptional()
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