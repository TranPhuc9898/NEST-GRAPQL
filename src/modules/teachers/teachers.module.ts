// file viết cuối cùng
import { Module } from '@nestjs/common';
import { TeacherController } from './teachers.controller';
import { teacherProviders } from './teachers.providers';
import { teacherResolver } from './teachers.resolver';
import { TeacherService } from './teachers.service';

@Module({
  providers: [TeacherService, ...teacherProviders, teacherResolver],
  controllers: [TeacherController],
})
export class TeacherModule {}
