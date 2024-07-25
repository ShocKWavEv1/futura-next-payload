import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "cart_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"catalog_item_id" integer NOT NULL,
	"quantity" numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS "cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"user" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "cart_items_order_idx" ON "cart_items" ("_order");
CREATE INDEX IF NOT EXISTS "cart_items_parent_id_idx" ON "cart_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "cart_created_at_idx" ON "cart" ("created_at");
DO $$ BEGIN
 ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_catalog_item_id_catalog_id_fk" FOREIGN KEY ("catalog_item_id") REFERENCES "catalog"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "cart"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "cart_items";
DROP TABLE "cart";`)
};
