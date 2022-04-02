import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../auth.service'
import { User } from '../../graphql.schema'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      // rewrite, by default ['username', 'password']
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  async validate(email: string, password: string): Promise<User | never> {
    const user = await this.authService.validateUser(email, password)
    if (!user) throw new UnauthorizedException()
    return user // This user is putted in grapgql's context
  }
}
