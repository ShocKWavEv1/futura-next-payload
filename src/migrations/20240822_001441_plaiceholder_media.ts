import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "cart_items" ADD COLUMN "main_image_url" varchar;
ALTER TABLE "cart_items" ADD COLUMN "base64" varchar;`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "cart_items" DROP COLUMN IF EXISTS "main_image_url";
ALTER TABLE "cart_items" DROP COLUMN IF EXISTS "base64";`)
};
