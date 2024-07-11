import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class User extends Model<User> {
    @Column({ allowNull: false })
    name: string;

    @Column({allowNull:false,unique:true})
    email: string;

    @Column
    password: string;
}
