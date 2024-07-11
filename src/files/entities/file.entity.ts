import { Model } from 'sequelize';
import { Table, Column } from 'sequelize-typescript';



@Table
export class File extends Model<File>{
    @Column({ allowNull:false})
    userId: string;

    @Column({})
    table_name: string;
}

