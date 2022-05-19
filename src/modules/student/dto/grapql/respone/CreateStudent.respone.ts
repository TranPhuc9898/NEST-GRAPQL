import { Field, ObjectType } from '@nestjs/graphql';
import { fileURLToPath } from 'url';
import { StudentType } from '../type/Student.type';

@ObjectType()
export class CreateStudentRespone {
  @Field(() => StudentType)
  data: StudentType;
}

//respone
