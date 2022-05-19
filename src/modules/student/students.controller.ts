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
import { StudentDto } from './dto/students.dto';
import { StudentService } from './students.service';

// file controller dùng để điều hướng req
@Controller('/student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post('/')
  async createStudentController(
    @Body() student: StudentDto,
    @Request() req
  ): Promise<StudentDto> {
    // console.log(req);
    console.log(student, 'hello');
    return await this.studentService.create(req.body);
  }

  @Get('/:id')
  async getStudentController(@Param() id: number): Promise<StudentDto> {
    return await this.studentService.getById(id);
  }

  @Get('/')
  async getStudentsController(): Promise<StudentDto[]> {
    return await this.studentService.getAll();
  }

  @Put('/:id')
  async updateStudentController(
    @Param() params: any,
    @Body() data: Partial<StudentDto>
  ): Promise<StudentDto[]> {
    const result: any[] = [];
    const { id } = params;
    const [rowCount, affectedRows] = await this.studentService.update(id, data);
    console.log(rowCount, '1');
    console.log(affectedRows, '2');
    result.push(affectedRows[0]);
    return result;
  }

  @Delete('/:id')
  async deleteStudentController(@Param() params: any): Promise<any> {
    return await this.studentService.delete(params.id);
  }
}
