import { IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class TitleDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(3)
    @MaxLength(150)
    description: string;
}