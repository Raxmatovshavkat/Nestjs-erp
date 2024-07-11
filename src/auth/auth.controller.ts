import { Controller, Get, Post, Body, Param, Delete,  ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from '../user/dto/register-user.dto';
import { CreateLoginDto } from 'src/user/dto/login-user.dto ';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  
  @Post('signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() createRegisterDto: CreateRegisterDto) {
    return this.authService.signup(createRegisterDto);
  }

  @Post('login')
  signIn(@Body() createLoginDto: CreateLoginDto) {
    return this.authService.signIn(createLoginDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Delete('logout/:id')
  remove(@Param('id') id: string) {
    return this.authService.logout(+id);
  }
}
