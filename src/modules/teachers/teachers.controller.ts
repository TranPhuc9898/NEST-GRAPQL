import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { TeacherDto } from './dto/teachers.dto';
import { TeacherService } from './teachers.service';

// file controller dùng để điều hướng req
@Controller('/teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}
  @Post('/')
  async createTeacherController(
    @Body() teacher: TeacherDto
  ): Promise<TeacherDto> {
    console.log(teacher, 'hello');
    return await this.teacherService.create(teacher);
  }

  @Get('/:id')
  async getStudentController(@Param() id: number): Promise<TeacherDto> {
    return await this.teacherService.getById(id);
  }
}
