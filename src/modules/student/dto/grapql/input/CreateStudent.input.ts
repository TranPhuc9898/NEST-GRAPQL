import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field(() => String, { nullable: false })
  fullname: string;
  @Field(() => String, { nullable: false })
  @IsEmail()
  email: string;
  @Field(() => String, { nullable: false })
  password: string;
}

//input là thứ truyền lên
