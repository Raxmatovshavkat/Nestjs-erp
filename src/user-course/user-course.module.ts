import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { userCourse } from './entities/user-course.entity';

@Module({
  imports:[SequelizeModule.forFeature([userCourse])],
  controllers: [UserCourseController],
  providers: [UserCourseService],
})
export class UserCourseModule {}
