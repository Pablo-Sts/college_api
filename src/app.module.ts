import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [StudentModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
