import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Gender } from '../enums';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Gender)
  gender: Gender;
}
