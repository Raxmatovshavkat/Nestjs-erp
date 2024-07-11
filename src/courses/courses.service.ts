import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course) private readonly courseService:typeof Course){}

 async create(createCourseDto: CreateCourseDto) {
    return await this.courseService.create({...createCourseDto});
  }

  async findAll() {
    return await this.courseService.findAll();
  }

  async findOne(id: number) {
    return await this.courseService.findByPk(id);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course=await this.courseService.findByPk(id)
    if(!course){
      throw new NotFoundException()
    }
    course.update(updateCourseDto)
  }

  async remove(id: number) {
    const course = await this.courseService.findByPk(id)
    if (!course) {
      throw new NotFoundException()
    }
    course.destroy()
  }
}
