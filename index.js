const  sql  = require( "@vercel/postgres");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/teste",async (req, res) => {
    const {rows } = await sql`SELECT * from CARTS where user_id=${params.user}`

  res.json({ message: "Hello World! meu nome é Mauro ",data: rows });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
