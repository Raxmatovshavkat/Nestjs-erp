import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { CourseFile } from 'src/course-file/entities/course-file.entity';

@Table
export class Course extends Model {
    @Column({ allowNull: false })
    name: string

    @Column({
        allowNull: false,
    })
    price:number

    @HasMany(() => CourseFile)
    courses: CourseFile[]
}


