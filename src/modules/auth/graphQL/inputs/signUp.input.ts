import { Field, InputType } from '@nestjs/graphql';
import { Gender } from '../enums';

@InputType()
export class SignUpInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Gender)
  gender: Gender;
}
