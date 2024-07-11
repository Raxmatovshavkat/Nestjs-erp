import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { CoursesModule } from './courses/courses.module';
import { CourseFileModule } from './course-file/course-file.module';
import { UserCourseModule } from './user-course/user-course.module';
import { RefreshTokenModule } from './token/token.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/db';
import * as dotenv from "dotenv"
import { ConfigModule } from '@nestjs/config';
import { LoggingInterceptor } from './log/logging.intercetor';
console.log(process.env.DATABASE_DIALECT as any);

dotenv.config()
@Module({

  
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot(databaseConfig()),
    AuthModule,
    UserModule,
    FilesModule,
    CoursesModule,
    CourseFileModule,
    UserCourseModule,
    RefreshTokenModule
  ],
  controllers: [],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: LoggingInterceptor,
    },
  ],
})

export class AppModule { }
