import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { userCourse } from './entities/user-course.entity';

@Injectable()
export class UserCourseService {
  constructor(@InjectModel(userCourse) private readonly userCourseService:typeof userCourse){}

  async create(createUserCourseDto: CreateUserCourseDto) {
    return await this.userCourseService.create({...createUserCourseDto});
  }

  async findAll() {
    return await this.userCourseService.findAll();
  }

  async findOne(id: number) {
    return await this.userCourseService.findByPk(id);
  }

  async update(id: number, updateUserCourseDto: UpdateUserCourseDto) {
    const userC=this.userCourseService.findByPk(id)
    if(!userC){
      throw new NotFoundException()
    }
    return (await userC).update(updateUserCourseDto)
  }

  async remove(id: number) {
    const userC = this.userCourseService.findByPk(id)
    if (!userC) {
      throw new NotFoundException()
    }
    return (await userC).destroy()
  }
}
