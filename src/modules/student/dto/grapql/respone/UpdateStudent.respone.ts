import { Field, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../type/Student.type';

@ObjectType()
export class UpdateStudentRespone {
  @Field(() => StudentType)
  data: StudentType;
}

//respone
