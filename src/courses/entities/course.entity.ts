import { Column, HasMany, Model, Table } from 'sequelize-typescript';


@Table
export class Course extends Model {
    @Column({ allowNull: false })
    name: string

    @Column({
        allowNull: false,
    })
    price:number

}


