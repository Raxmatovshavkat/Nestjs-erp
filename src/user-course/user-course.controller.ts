import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';

@Controller('user-course')
export class UserCourseController {
  constructor(private readonly userCourseService: UserCourseService) {}

  @Post()
 async create(@Body() createUserCourseDto: CreateUserCourseDto) {
    return await this.userCourseService.create(createUserCourseDto);
  }

  @Get()
  async findAll() {
    return await this.userCourseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userCourseService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserCourseDto: UpdateUserCourseDto) {
    return await this.userCourseService.update(+id, updateUserCourseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userCourseService.remove(+id);
  }
}
