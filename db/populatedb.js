#! /usr/bin/env node
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  messageid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR (255),
  username VARCHAR (255),
  added VARCHAR (255)
);

INSERT INTO messages (text, username, added)
VALUES
  ('Finally done with this mini project', 'xplozion', '2025-09-09T03:37:11+05:30'),
  ('Anyone working on the project today?', 'Odin', '2025-09-09T03:40:22+05:30'),
  ('Tell your cat I said pspspspspspsps', 'mini xplozion', '2025-09-09T03:42:55+05:30');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:npg_KOtcM2eQUVT3@ep-nameless-snow-a1aysqky-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
