import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';

@ObjectType()
export class SignUpResponseData {
  @Field(() => UserModel)
  user: UserModel;

  @Field(() => String)
  token: string;
}

@ObjectType()
export class SignUpResponse {
  @Field(() => SignUpResponseData)
  data: SignUpResponseData;
}
