import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CreateUserInput } from '../graphql.schema'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ExecutionContext } from 'graphql/execution/execute'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Query('user')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number, @Context() _context: ExecutionContext) {
    return this.usersService.findOne(id)
  }

  @UseGuards(JwtAuthGuard)
  @Mutation('removeUser')
  remove(@Args('id') id: number, _context: ExecutionContext) {
    return this.usersService.remove(id)
  }
}
