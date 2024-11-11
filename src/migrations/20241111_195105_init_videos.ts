import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "videos_videos" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"video_name" varchar NOT NULL,
	"video_url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "videos_videos_order_idx" ON "videos_videos" ("_order");
CREATE INDEX IF NOT EXISTS "videos_videos_parent_id_idx" ON "videos_videos" ("_parent_id");
CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" ("created_at");
DO $$ BEGIN
 ALTER TABLE "videos_videos" ADD CONSTRAINT "videos_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "videos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "videos_videos";
DROP TABLE "videos";`)
};
