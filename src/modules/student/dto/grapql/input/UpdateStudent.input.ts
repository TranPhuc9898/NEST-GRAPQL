import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';
import { StudentType } from '../type/Student.type';

@InputType()
export class UpdateStudentInputData {
  @Field(() => String, { nullable: true })
  fullname?: string;

  @Field(() => String, { nullable: true })
  email?: string;
}

@InputType()
export class UpdateStudentInput {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => UpdateStudentInputData)
  data: UpdateStudentInputData;
}

//input là thứ truyền lên
