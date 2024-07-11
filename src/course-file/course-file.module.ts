import { Module } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CourseFileController } from './course-file.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseFile } from './entities/course-file.entity';

@Module({
  imports:[SequelizeModule.forFeature([CourseFile])],
  controllers: [CourseFileController],
  providers: [CourseFileService],
})
export class CourseFileModule {}
