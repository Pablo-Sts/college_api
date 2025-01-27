import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";
import { StudentSexEnum } from "src/student/student.dto";

export enum TeacherCivilStatusEnum {
    S = "S",
    C = "C",
    D = "D",
    V = "V"
}

export class TeacherDto {
    @IsNumber()
    @IsOptional()
    @Min(1)
    id: number;

    @IsNumber()
    @Min(1)
    titleId: number;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;

    @IsEnum(StudentSexEnum)
    @IsOptional()
    sex: string;

    @IsEnum(TeacherCivilStatusEnum)
    @IsOptional()
    civilStatus: string;

    @IsDateString()
    birthDate: Date;

    @IsString()
    @MinLength(10)
    @MaxLength(13)
    phoneNumber: string;
}