#! /usr/bin/env node

const { Client } = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  messageId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR (255),
  user VARCHAR (255),
  date VARCHAR (255),
);

INSERT INTO messages (message) 
VALUES
('Hey everyone, what''s up?', 'xplozion', 'Sep 9, 2025, 03:37:11 PM India Standard Time'),
  ('Anyone working on the project today?', 'odin', 'Sep 9, 2025, 03:40:22 PM India Standard Time'),
  ('I just fixed the bug in the login page!', 'mini xplozion', 'Sep 9, 2025, 03:42:55 PM India Standard Time');
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
