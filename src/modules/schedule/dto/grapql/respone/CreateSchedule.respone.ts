import { Field, ObjectType } from '@nestjs/graphql';
import { fileURLToPath } from 'url';
import { ScheduleType } from '../type/Schedule.type';

@ObjectType()
export class CreateScheduleRespone {
  @Field(() => ScheduleType)
  data: ScheduleType;
}
