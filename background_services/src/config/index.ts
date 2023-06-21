import sql from 'mssql'
import dotenv from 'dotenv'


export const sqlConfig = {
  user: "sa" as string,
  password: "p101/0818g/18" as string,
  database: "STACKOVERFLOW" as string,
  server: "localhost" as string,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

// async function connectToDB() {
//   try {
//     const pool = await sql.connect(sqlConfig);
//     if (pool.connected) {
//       console.log('Connected to DB');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// connectToDB();
  