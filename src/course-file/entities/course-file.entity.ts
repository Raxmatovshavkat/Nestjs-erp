import { Column, ForeignKey } from "sequelize-typescript";
import { Course } from "src/courses/entities/course.entity";

export class CourseFile {

    @ForeignKey(()=>Course)
    @Column({
        allowNull:false
    })
    courseId:number
}
