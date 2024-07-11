import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { CoursesModule } from './courses/courses.module';
import { CourseFileModule } from './course-file/course-file.module';
import { UserCourseModule } from './user-course/user-course.module';
import { RefreshTokenModule } from './token/token.module';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from "dotenv"
dotenv.config()
@Module({

  imports: [
    SequelizeModule.forRoot({
      dialect: process.env.DATABASE_DIALECT as any,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.PORT_DB, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: process.env.DATABASE_AUTO_LOAD_MODELS === 'true',
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      logging: false
    }),
    AuthModule,
    UserModule,
    FilesModule,
    CoursesModule,
    CourseFileModule,
    UserCourseModule,
    RefreshTokenModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
