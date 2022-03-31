
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAuthInput {
    id: string;
    name: string;
    exampleField: number;
}

export class UpdateAuthInput {
    name?: Nullable<string>;
}

export class Auth {
    id?: Nullable<string>;
    name?: Nullable<string>;
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract authentications(): Nullable<Auth>[] | Promise<Nullable<Auth>[]>;

    abstract authentication(id: number): Nullable<Auth> | Promise<Nullable<Auth>>;
}

export abstract class IMutation {
    abstract createAuth(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;

    abstract updateAuth(id: number, updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;

    abstract removeAuth(id: number): Nullable<Auth> | Promise<Nullable<Auth>>;
}

type Nullable<T> = T | null;
