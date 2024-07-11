
import { Table, Column, Model, ForeignKey, DataType, HasMany } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';


@Table
export class File extends Model{
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @Column({})
    table_name: string;

    @HasMany(()=>User)
    users:User[]
}

