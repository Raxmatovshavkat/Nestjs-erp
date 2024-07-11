import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './entities/file.entity';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File) private readonly fileModel: typeof File) { }

  async create(createFileDto: CreateFileDto) {
    return await this.fileModel.create({ ...createFileDto });
  }

  async findAll() {
    return await this.fileModel.findAll();
  }

  async findOne(id: number) {
    return await this.fileModel.findByPk(id);
  }

  async update(id: number, updateFileDto: UpdateFileDto) {
    const file = await this.fileModel.findByPk(id);
    if (!file) {
      throw new NotFoundException()
    }
    return await file.update({ ...updateFileDto });
  }

  async remove(id: number) {
    const file = await this.fileModel.findByPk(id);
    if (file) {
      return await file.destroy();
    }
    return null;
  }
}
