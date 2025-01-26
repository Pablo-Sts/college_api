import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export enum StudentSexEnum {
    M = "M",
    F = "F"
}

export class StudentDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    name: string;

    @IsEnum(StudentSexEnum)
    @IsOptional()
    sex: string;

    @IsDateString()
    birthDate: Date;
}