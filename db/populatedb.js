#! /usr/bin/env node
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  messageId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR (255),
  username VARCHAR (255),
  added VARCHAR (255)
);

INSERT INTO messages (text, username, added)
VALUES
  ('Hey everyone, what''s up?', 'xplozion', '2025-09-09T03:37:11+05:30'),
  ('Anyone working on the project today?', 'odin', '2025-09-09T03:40:22+05:30'),
  ('I just fixed the bug in the login page!', 'mini xplozion', '2025-09-09T03:42:55+05:30');
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
