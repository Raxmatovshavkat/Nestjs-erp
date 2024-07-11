import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { RefreshToken } from './entities/token.entity';
import { RefreshTokenDto } from './dto/create-token.dto';
import * as dotenv from 'dotenv';
dotenv.config()

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectModel(RefreshToken) private readonly refreshTokenModel: typeof RefreshToken,
    private readonly jwtService: JwtService,
  ) { }

  async storeRefreshToken(refreshTokenDto: RefreshTokenDto) {
    await this.refreshTokenModel.create({ ...refreshTokenDto });
  }

  async removeTokensForUser(userId: number): Promise<{ acknowledged: boolean; deletedCount: number }> {
    const result = await this.refreshTokenModel.destroy({ where: { userId } });
    return { acknowledged: true, deletedCount: result };
  }

  async getAll(){
    return this.refreshTokenModel.findAll()
  }
}
