import { Injectable, Inject, Param } from '@nestjs/common';
import { Student } from '../../core/entities/student.entity';

import { STUDENT_REPOSITORY } from '../../core/constants';
import { StudentDto } from './dto/students.dto';
import { request } from 'http';

// viết service để tương tác với REPOSITORY
// Cho nên những thằng khác sẽ gọi nó
@Injectable()
export class StudentService {
  constructor(
    @Inject(STUDENT_REPOSITORY)
    private readonly studentRepository: typeof Student
  ) {}
  // student: StudentDto
  // check
  async create(student: StudentDto): Promise<Student> {
    return await this.studentRepository.create<Student>(student);
  }

  //Partial : tất cả các trường là 1 option
  async update(id: number, data: Partial<StudentDto>): Promise<any> {
    return await this.studentRepository.update(
      { ...data },
      {
        where: {
          id: id,
        },
        returning: false,
      }
    );
    // [1,[{}]]
  }

  async updateOne(id: number, data: Partial<StudentDto>): Promise<any> {
    return (
      await this.studentRepository.update(
        { ...data },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      )
    )[1][0];
    //affected row count: number = 1
    // [0]: the first element of affected rows : [{},{},{}] [{data},{data1}]
  }

  async getAll(): Promise<Student[]> {
    return await this.studentRepository.findAll();
  }

  async getById(@Param() params: any): Promise<Student | any> {
    const studentEntity = await this.studentRepository.findByPk(params.id);
    if (!studentEntity) return { code: 404, message: 'Not Found' };
    return studentEntity;
  }

  async delete(id: number): Promise<any> {
    try {
      const destroyedRowCount = await this.studentRepository.destroy({
        where: { id },
      });
      if (destroyedRowCount === 0) return { code: 404, message: 'Not Found' };
      if (destroyedRowCount > 0)
        return { code: 204, message: 'Delete Success' };
    } catch (err) {
      console.log('error: ', err);
      return { code: 500, message: 'Internal Server Error' };
    }
  }
}

// GRAPHQL luôn là POST request
