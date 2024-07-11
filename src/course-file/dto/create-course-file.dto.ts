import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCourseFileDto {
    @IsNumber()
    @IsNotEmpty()
    courseId:number;
    @IsString()
    name:string;
    @IsBoolean()
    is_active:boolean;
}
