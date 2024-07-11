import { Controller, Get, Post, Body, Param, Delete,  ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from '../user/dto/register-user.dto';
import { CreateLoginDto } from 'src/user/dto/login-user.dto ';
import { JwtAuthGuard } from 'src/guard/guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }


  @Post('register')
  @UsePipes(ValidationPipe)
  async signUp(@Body() createRegisterDto: CreateRegisterDto) {
    return await this.authService.signup(createRegisterDto);
  }

  @Post('login')
  async signIn(@Body() createLoginDto: CreateLoginDto) {
    return await this.authService.signIn(createLoginDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
 async findAll() {
    return await this.authService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
 async findOne(@Param('id') id: string) {
    return await this.authService.findOne(+id);
  }

  @Delete('logout/:id')
  @UseGuards(JwtAuthGuard)
 async remove(@Param('id') id: string) {
    return await this.authService.logout(+id);
  }
}
