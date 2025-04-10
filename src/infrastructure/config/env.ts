import dotenv from "dotenv";
dotenv.config();

export const env = {
    dbUser: process.env.DB_USER || "user",
    dbPass: process.env.DB_PASSWORD || "password",
    dbName: process.env.DB_NAME || "favorite_links_db",
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: Number(process.env.DB_PORT) || 5432,
    port: Number(process.env.PORT) || 3000,
};
