
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface LoginInput {
    email: string;
    password: string;
}

export interface CreateUserInput {
    email: string;
    password: string;
}

export interface UpdateUserInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface LoginResponse {
    token: string;
    expirationTime: string;
}

export interface IMutation {
    login(loginInput?: Nullable<LoginInput>): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IQuery {
    user(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
