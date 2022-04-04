export class TokenPayload {
  sub: number;
  email: string;
}

export class TokenRes {
  token: string;
  expirationTime: string;
}
