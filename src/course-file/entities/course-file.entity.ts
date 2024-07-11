import { BelongsTo, Column, DataType, Model, ForeignKey, Table } from "sequelize-typescript";
import { Course } from "src/courses/entities/course.entity";

@Table
export class CourseFile extends Model {
    @ForeignKey(() => Course)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    courseId: number;

    @Column({
        allowNull:false
    })
    name:string

    @Column({
        allowNull: false
    })
    is_active:boolean

    @BelongsTo(() => Course, )
    course: Course;
}
