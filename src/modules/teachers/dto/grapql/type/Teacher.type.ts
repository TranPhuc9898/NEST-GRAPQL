import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class TeacherType {
  @Field(() => String, { nullable: false })
  fullname: string;

  @Field(() => Int, { nullable: false })
  id: number;
}

//type là chính là cái thứ trả về
