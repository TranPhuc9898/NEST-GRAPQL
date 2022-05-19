// file viết cuối cùng
import { Module } from '@nestjs/common';
import { StudentController } from './students.controller';
import { studentProviders } from './students.providers';
import { StudentResolver } from './students.resolver';
import { StudentService } from './students.service';

@Module({
  providers: [StudentService, ...studentProviders, StudentResolver],
  controllers: [StudentController],
  exports: [StudentResolver],
})
export class StudentModule {}
