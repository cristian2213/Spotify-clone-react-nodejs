import { Injectable } from '@nestjs/common';
import { CreateAuthInput, UpdateAuthInput } from '../graphql.schema';

@Injectable()
export class AuthService {
  auths: Array<any> = [
    {
      id: 1,
      name: 'default',
      exampleField: 1,
    },
  ];

  create(createAuthInput: CreateAuthInput) {
    this.auths.push(createAuthInput);
    return createAuthInput;
  }

  findAll() {
    return this.auths;
  }

  findOne(id: number) {
    return this.auths.find((auth) => auth.id === id);
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    const authIndex = this.auths.findIndex((auth) => auth.id === id);
    if (!authIndex) return null;

    this.auths[authIndex] = {
      ...this.auths[authIndex],
      ...updateAuthInput,
    };

    return this.auths[authIndex];
  }

  remove(id: number) {
    const authIndex = this.auths.findIndex((auth) => auth.id === id);
    if (!authIndex) return null;

    this.auths = this.auths.filter((auth) => auth.id !== id);
    return this.auths;
  }
}
