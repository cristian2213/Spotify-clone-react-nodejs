import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':token')
  // getHello(@Param('token') token: string, @Res() res: Response) {
  //   return this.appService.validateToken(token, res);
  // }
}
