import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFileDto {
    @IsNotEmpty()
    userId: string;

    @IsString()
    table_name: string;

}
