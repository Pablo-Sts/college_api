import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DbModule } from './db/db.module';
import { TeacherModule } from './teacher/teacher.module';
import { TitleModule } from './title/title.module';
import { InstitutionModule } from './institution/institution.module';

@Module({
  imports: [StudentModule, DbModule, TeacherModule, TitleModule, InstitutionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
