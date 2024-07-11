import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class FilesService {
  constructor(@InjectModel(File) private readonly fileModel:typeof File) { }

  async create(createFileDto: CreateFileDto) {
    return await this.fileModel.create({...createFileDto});
  }

  async findAll() {
    return await this.fileModel.findAll();
  }

  async findOne(id: number) {
    return await this.fileModel.findByPk(id);
  }

  async update(id: number, updateFileDto: UpdateFileDto) {
    const file=this.fileModel.findByPk(id)
  }

  async remove(id: number) {
    return await this.fileModel.findByIdAndDelete(id).exec();
  }
}
