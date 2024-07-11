import { Module } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CourseFileController } from './course-file.controller';

@Module({
  imports:[],
  controllers: [CourseFileController],
  providers: [CourseFileService],
})
export class CourseFileModule {}
