import { MigrationInterface, QueryRunner } from 'typeorm';

export class songsTable1649884931356 implements MigrationInterface {
  name = 'songsTable1649884931356';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "songs" ("id" SMALLSERIAL NOT NULL, "name" character varying(255) NOT NULL, "path" character varying(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_e504ce8ad2e291d3a1d8f1ea2f4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "songs"`);
  }
}
