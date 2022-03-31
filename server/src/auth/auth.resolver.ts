import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateAuthInput, UpdateAuthInput } from '../graphql.schema';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('createAuth')
  create(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    return this.authService.create(createAuthInput);
  }

  @Query('authentications')
  findAll() {
    return this.authService.findAll();
  }

  @Query('authentication')
  findOne(@Args('id') id: number) {
    return this.authService.findOne(id);
  }

  @Mutation('updateAuth')
  update(
    @Args('id') id: number,
    @Args('updateAuthInput') updateAuthInput: UpdateAuthInput,
  ) {
    return this.authService.update(id, updateAuthInput);
  }

  @Mutation('removeAuth')
  remove(@Args('id') id: number) {
    return this.authService.remove(id);
  }
}
