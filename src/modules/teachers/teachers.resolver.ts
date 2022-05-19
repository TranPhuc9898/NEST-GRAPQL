import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTeacherInput } from './dto/grapql/input/CreateTeacher.input';
import { TeacherType } from './dto/grapql/type/Teacher.type';
import { TeacherService } from './teachers.service';
@Resolver()
export class teacherResolver {
  constructor(private teacherService: TeacherService) {}
  @Mutation(() => TeacherType)
  async createTeacher(
    @Args('input') args: CreateTeacherInput
  ): Promise<TeacherType> {
    console.log(args, 'hello');
    return await this.teacherService.create(args);
  }

  @Query(() => [TeacherType])
  async getTeachers(): Promise<TeacherType[]> {
    return await this.teacherService.getAll();
  }
}
