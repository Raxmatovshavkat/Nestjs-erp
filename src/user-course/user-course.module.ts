import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';

@Module({
  controllers: [UserCourseController],
  providers: [UserCourseService],
})
export class UserCourseModule {}
