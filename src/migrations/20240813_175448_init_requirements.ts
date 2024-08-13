import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "requirements_requirements" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"description" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "requirements" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "files_download_data" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"file_download_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "files_download" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"description" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "requirements_requirements_order_idx" ON "requirements_requirements" ("_order");
CREATE INDEX IF NOT EXISTS "requirements_requirements_parent_id_idx" ON "requirements_requirements" ("_parent_id");
CREATE INDEX IF NOT EXISTS "requirements_created_at_idx" ON "requirements" ("created_at");
CREATE INDEX IF NOT EXISTS "files_download_data_order_idx" ON "files_download_data" ("_order");
CREATE INDEX IF NOT EXISTS "files_download_data_parent_id_idx" ON "files_download_data" ("_parent_id");
CREATE INDEX IF NOT EXISTS "files_download_created_at_idx" ON "files_download" ("created_at");
DO $$ BEGIN
 ALTER TABLE "requirements_requirements" ADD CONSTRAINT "requirements_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "requirements"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "files_download_data" ADD CONSTRAINT "files_download_data_file_download_id_media_id_fk" FOREIGN KEY ("file_download_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "files_download_data" ADD CONSTRAINT "files_download_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "files_download"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "requirements_requirements";
DROP TABLE "requirements";
DROP TABLE "files_download_data";
DROP TABLE "files_download";`)
};
