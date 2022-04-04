import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {} from '@nestjs/graphql';

// AuthGuard('local') is calling my local Strategy, but this's a bit magic, yet AuthGuard()  is internally looking by the name of the strategy and then execute it, other option is to create and a class and inherent it as this:👇
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
