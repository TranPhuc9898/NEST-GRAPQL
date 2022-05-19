import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentRespone } from './dto/grapql/respone/CreateStudent.respone';
import { CreateStudentInput } from './dto/grapql/input/CreateStudent.input';
import { StudentService } from './students.service';
import { StudentType } from './dto/grapql/type/Student.type';
import { UpdateStudentInput } from './dto/grapql/input/UpdateStudent.input';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Mutation(() => StudentType)
  async createStudent(
    @Args('input') args: CreateStudentInput
  ): Promise<StudentType> {
    console.log(args, 'hello');
    return await this.studentService.create(args);
  }

  @Mutation(() => StudentType)
  async updateStudent(
    @Args('input') args: UpdateStudentInput
  ): Promise<StudentType> {
    const queryResult = await this.studentService.updateOne(args.id, args.data);
    // const result = queryResult[1][0];
    // [2, [{ id: 1 }, { id: 2 }]];
    // queryResult[1] = [{ id: 1 }, { id: 2 }];
    // queryResult[1][0] = { id: 1 };
    return queryResult;
  }

  @Query(() => [StudentType])
  async getStudents(): Promise<StudentType[]> {
    return await this.studentService.getAll();
  }
}
