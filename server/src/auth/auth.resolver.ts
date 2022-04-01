import { UseGuards } from '@nestjs/common'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { LoginInput } from '../graphql.schema'
import { LocalAuthGuard } from './guards/local.guard'
// This Guard invokes the Passport strategy and kicks off the steps described above (retrieving credentials, running the verify function, creating the user property, etc).

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation('login')
  create(@Args('loginInput') loginInput: LoginInput) {
    console.log(loginInput)
    return this.authService.generateJWT(loginInput)
  }
}
