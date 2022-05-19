import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

@InputType()
export class CreateTeacherInput {
  @Field(() => String, { nullable: false })
  fullname: string;
}

//input là thứ truyền lên
