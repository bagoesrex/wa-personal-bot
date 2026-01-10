import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  APP_NAME: z.string().min(1),
  WA_DEVICE_NAME: z.string().min(1).default("./session"),
  WA_SESSION_PATH: z.string().min(1).default("meguphone"),

  GEMINI_API_KEY: z.string().min(1),
  GEMINI_MODEL: z.string().default("gemini-2.5-flash"),

  COINMARKETCAP_API_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
