const { Pool } = require("pg");
require('dotenv').config();

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: "postgresql://neondb_owner:npg_KOtcM2eQUVT3@ep-nameless-snow-a1aysqky-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});
