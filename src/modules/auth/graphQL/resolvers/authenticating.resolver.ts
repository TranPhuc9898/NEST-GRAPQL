import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthController } from '../../auth.controller';
import { SignUpInput } from '../inputs';
import { SignUpResponse } from '../responses';

@Resolver()
export class AuthenticatingResolver {
  constructor(private authController: AuthController) {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => SignUpResponse)
  async SignUp(@Args('input') args: SignUpInput): Promise<SignUpResponse> {
    return {
      data: await this.authController.signUp(args),
    };
  }
}
