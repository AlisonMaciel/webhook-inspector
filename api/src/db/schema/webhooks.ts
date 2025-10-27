import { pgTable, text, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const webhooks = pgTable('webhooks', {
  id: text().primaryKey().$defaultFn(() => uuidv7()),
  method: text().notNull(),
  pathname: text().notNull(),
  ip: text().notNull(),
  statusCode: integer().notNull().default(200),
  contentType: text(),
  contentLenght: integer(),
  queryParams: jsonb().$type<Record<string, string>>().notNull(),
  body: text(),
  createdAt: timestamp().notNull().defaultNow(),
})