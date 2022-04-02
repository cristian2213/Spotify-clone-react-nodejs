
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface LoginInput {
    id?: Nullable<number>;
    email: string;
    password: string;
}

export interface SignupInput {
    name: string;
    email: string;
    password: string;
}

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface LoginResponse {
    token: string;
    expirationTime: string;
}

export interface SignupResponse {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IMutation {
    login(loginInput?: Nullable<LoginInput>): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;
    signup(signupInput?: Nullable<SignupInput>): Nullable<SignupResponse> | Promise<Nullable<SignupResponse>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IQuery {
    user(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
