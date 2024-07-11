
import { exec } from "child_process";
import { Column, Model, Table } from "sequelize-typescript";

@Table
export class File extends Model{
    @Column({ allowNull:false})
    userId: string;

    @Column({})
    table_name: string;
}

