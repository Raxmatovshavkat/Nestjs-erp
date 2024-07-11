import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({allowNull:false})
    name:string

    @Column({
        unique:true,
        allowNull:false,
    })
    email:string;

    @Column({
        allowNull:false
    })
    password:string

}
