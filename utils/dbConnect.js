//require('dotenv').config()
const mongoose = require("mongoose");

async function dbConnect() {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to Database"));
}

export default dbConnect;
