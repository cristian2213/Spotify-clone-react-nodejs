import { registerAs } from '@nestjs/config';
export default registerAs('config', () => {
  return {
    databases: {
      postgrest: {
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_NAME: process.env.POSTGRES_NAME,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_PORT: process.env.POSTGRES_PORT,
      },
    },

    auth: {
      jwt: {
        JWT_SECRET: process.env.JWT_SECREt,
      },
    },
  };
});
