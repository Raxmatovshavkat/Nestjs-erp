import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';


@Module({
  imports:[SequelizeModule.forFeature([User])],
  controllers: [],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
