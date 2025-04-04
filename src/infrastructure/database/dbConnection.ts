import { Pool } from "pg";
import { env } from "../config/env";

export const pool = new Pool({
    user: env.dbUser,
    host: env.dbHost,
    database: env.dbName,
    password: env.dbPass,
    port: env.dbPort,
})