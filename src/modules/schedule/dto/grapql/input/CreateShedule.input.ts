import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

@InputType()
export class CreateScheduleInput {
  @Field(() => String, { nullable: false })
  note: string;
  @Field(() => Int, { nullable: false })
  teacherId: number;
  @Field(() => Int, { nullable: false })
  studentId: number;
  @Field(() => String, { nullable: false })
  startTime: string;
  @Field(() => String, { nullable: false })
  endTime: string;
}

//input là thứ truyền lên
