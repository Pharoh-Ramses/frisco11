// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";

const app = express();
const port = process.env.PORT || 13000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
