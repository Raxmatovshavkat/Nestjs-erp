import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';

@Controller('course-file')
export class CourseFileController {
  constructor(private readonly courseFileService: CourseFileService) {}

  @Post()
  async create(@Body() createCourseFileDto: CreateCourseFileDto) {
    return await this.courseFileService.create(createCourseFileDto);
  }

  @Get()
  async findAll() {
    return await this.courseFileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.courseFileService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCourseFileDto: UpdateCourseFileDto) {
    return await this.courseFileService.update(+id, updateCourseFileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.courseFileService.remove(+id);
  }
}
