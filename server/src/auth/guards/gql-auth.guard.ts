import { AuthGuard, IAuthModuleOptions } from '@nestjs/passport'
import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

// AuthGuard('local') is calling my local Strategy, but this's a bit magic, yet AuthGuard()  is internally looking by the name of the strategy and then execute it, other option is to create and a class and inherent it as this:👇
@Injectable()
export class GraphqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super()
  }

  //*@rewrite()
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext() // Create the request object that my local strategy needs to work
    request.body = ctx.getArgs().loginInput // Extracting data from graphql's context
    return request
  }
}
