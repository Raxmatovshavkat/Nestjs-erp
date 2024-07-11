import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CourseFile } from './entities/course-file.entity';

@Injectable()
export class CourseFileService {
  constructor(@InjectModel(CourseFile) private readonly courseFileService:typeof CourseFile){}
 async create(createCourseFileDto: CreateCourseFileDto) {
    return await this.courseFileService.create({...createCourseFileDto});
  }

  async findAll() {
    const coursFile=await this.courseFileService.findAll()
    if(!coursFile){
      throw new NotFoundException()
    }
    return coursFile
  }

  async findOne(id: number) {
    const coursFile = await this.courseFileService.findByPk(id)
    if (!coursFile) {
      throw new NotFoundException()
    }
    return coursFile
  }

  async update(id: number, updateCourseFileDto: UpdateCourseFileDto) {
    const coursFile = await this.courseFileService.findByPk(id)
    if (!coursFile) {
      throw new NotFoundException()
    }
    return coursFile.update(updateCourseFileDto)
  }

  async remove(id: number) {
    const coursFile = await this.courseFileService.findByPk(id)
    if (!coursFile) {
      throw new NotFoundException()
    }
    return coursFile.destroy()
  }
}
