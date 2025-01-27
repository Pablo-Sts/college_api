import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DbModule } from './db/db.module';
import { TeacherModule } from './teacher/teacher.module';
import { TitleModule } from './title/title.module';
import { InstitutionModule } from './institution/institution.module';
import { CourseTypeModule } from './course_type/course_type.module';
import { CourseModule } from './course/course.module';
import { SubjectTypeModule } from './subject_type/subject_type.module';
import { SubjectModule } from './subject/subject.module';
import { InstructModule } from './instruct/instruct.module';

@Module({
  imports: [StudentModule, DbModule, TeacherModule, TitleModule, InstitutionModule, CourseTypeModule, CourseModule, SubjectTypeModule, SubjectModule, InstructModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
