import { Field, ObjectType } from '@nestjs/graphql';
import { TeacherType } from '../type/Teacher.type';

@ObjectType()
export class CreateTeacherRespone {
  @Field(() => TeacherType)
  data: TeacherType;
}

//respone
