import { sql } from "@vercel/postgres";
// import { neonConfig, Pool } from '@neondatabase/serverless';
// neonConfig.useSecureWebSocket = false;

export default function handler(req, res) {
  let likes = "1"
  sql`SELECT * FROM test WHERE int < ${likes};`.then((query_res) => {
    res.status(200).json(query_res)
  });
}
