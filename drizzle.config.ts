import "dotenv/config";
import type { Config } from "drizzle-kit";
import { parse } from "pg-connection-string";

// Парсинг строки соединения
const connectionString = process.env.DATABASE_URL!;
const parsedConfig = parse(connectionString);

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
