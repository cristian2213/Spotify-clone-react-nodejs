import { Resolver, Mutation, Args, Context } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { LoginInput, SignupInput } from '../graphql.schema'
import { GraphqlAuthGuard } from './guards/gql-auth.guard'
import { UseGuards } from '@nestjs/common'

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  @UseGuards(GraphqlAuthGuard)
  login(@Args('loginInput') loginInput: LoginInput, @Context() context: any) {
    return this.authService.login(context.user)
  }

  @Mutation('signup')
  singUp(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signUp(signupInput)
  }
}
