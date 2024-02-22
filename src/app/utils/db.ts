import mariadb, { PoolConnection } from "mariadb";

export default async function connectDB(): Promise<PoolConnection|undefined>  {
    try {
        const pool = mariadb.createPool({
            host: 'mingot.ovh',
            port: 4000,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWRD,
            database: process.env.DB_NAME,
            connectTimeout: 20000
          });
          const conn = await pool.getConnection();
          console.log("mariadb connected");
          return conn;
    } catch (error) {
        console.log(error);
        return undefined
    }
};