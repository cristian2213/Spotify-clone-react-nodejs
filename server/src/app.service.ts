import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  validateToken(token: string, res: Response) {
    // dummy validation

    if (!token) throw new UnauthorizedException();

    res.redirect('/docs');
  }
}
