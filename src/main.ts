import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from "dotenv"
import { AllExceptionsFilter } from './filter';
dotenv.config()
async function bootstrap() {
  const port=process.env.PORT
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
  });
}
bootstrap();
