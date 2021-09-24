import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from './todo/entities/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABSE_HOST,
      database: process.env.DATABSE_NAME,
      port: +process.env.DATABSE_PORT,
      username: process.env.DATABSE_USERNAME,
      password: process.env.DATABSE_PASSWORD,
      entities: [Todo],
      synchronize: true,
      logging: false,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
