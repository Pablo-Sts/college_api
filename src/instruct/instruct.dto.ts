import { IsNumber, Min } from "class-validator";

export class InstructDto {
    @IsNumber()
    @Min(1)
    teacherId: number;

    @IsNumber()
    @Min(1)
    subjectId: number;
}