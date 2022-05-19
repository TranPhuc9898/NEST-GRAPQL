import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class StudentType {
  @Field(() => String, { nullable: false })
  fullname: string;
  @Field(() => String, { nullable: false })
  @IsEmail()
  email: string;
  @Field(() => Int, { nullable: false })
  id: number;
}

//type là chính là cái thứ trả về
