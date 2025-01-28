import { IsBoolean, IsNumber, Min } from "class-validator";

export class AttendDto {
    @IsNumber()
    @Min(1)
    studentId: number;

    @IsNumber()
    @Min(1)
    subjectId: number;

    @IsNumber()
    year: number;

    @IsNumber()
    semester: number;

    @IsNumber()
    @Min(0)
    grade1: number;
    
    @IsNumber()
    @Min(0)
    grade2: number;
    
    @IsNumber()
    @Min(0)
    grade3: number;

    @IsBoolean()
    approved: boolean;
}