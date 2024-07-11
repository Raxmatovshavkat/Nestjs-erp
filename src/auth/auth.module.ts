import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenModule } from 'src/token/token.module';

@Module({
  imports:[UserModule,
    RefreshTokenModule,
    JwtModule.register({
      global:true
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
