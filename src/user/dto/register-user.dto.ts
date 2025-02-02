import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateRegisterDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

}
