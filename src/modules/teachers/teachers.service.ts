import { Inject, Injectable, Param } from '@nestjs/common';
import { TEACHER_REPOSITORY } from '../../core/constants';
import { Teacher } from '../../core/entities/teacher.entity';
import { TeacherDto } from './dto/teachers.dto';

@Injectable()
export class TeacherService {
  constructor(
    @Inject(TEACHER_REPOSITORY)
    private readonly teacherRepository: typeof Teacher
  ) {}
  // student: StudentDto
  // check
  async create(teacher: TeacherDto): Promise<Teacher> {
    return await this.teacherRepository.create<Teacher>(teacher);
  }

  async getById(@Param() params: any): Promise<Teacher | any> {
    const teacherEntity = await this.teacherRepository.findByPk(params.id);
    if (!teacherEntity) return { code: 404, message: 'Not Found' };
    return teacherEntity;
  }

  async getAll(): Promise<Teacher[]> {
    return await this.teacherRepository.findAll();
  }
}

// ghi theo enityties
