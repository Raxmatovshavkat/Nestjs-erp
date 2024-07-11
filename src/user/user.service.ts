import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { CreateLoginDto } from './dto/login-user.dto ';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from "bcrypt"


@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel:typeof User){}

  async signup(createRegisterDto: CreateRegisterDto) {
    const { password, ...rest } = createRegisterDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userModel.create({ ...rest, password: hashedPassword });
  }

  async signin(createLoginDto: CreateLoginDto) {
    const {email,password}=createLoginDto;
    const user=this.userModel.findOne({where:{email}})
    if (!user || (await bcrypt.compare(password,(await user).password))){
      throw new UnauthorizedException()
    }

    return user
  }
  
  async findAll() {
    const user= this.userModel.findAll();
    if (!user){
      throw new NotFoundException()
    }
    return user
  }

  async findOne(id: number) {
    const user=await this.userModel.findByPk(id);
    if (!user){
      throw new NotFoundException()
    }
    return user
  }

  async logout(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException()
    }
    return user.destroy()
  }
}
