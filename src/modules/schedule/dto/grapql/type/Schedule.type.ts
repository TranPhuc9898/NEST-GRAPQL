import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class ScheduleType {
  @Field(() => String, { nullable: false })
  note: string;
  @Field(() => String, { nullable: false })
  startTime: string;
  @Field(() => String, { nullable: false })
  endTime: string;

  @Field(() => Int, { nullable: false })
  teacherId: number;
  @Field(() => Int, { nullable: false })
  studentId: number;
}

//type là chính là cái thứ trả về
