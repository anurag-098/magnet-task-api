import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import app from "./app.js";
import dbConnect from "./db/connetion.js";
const port = process.env.PORT || 8000;

dbConnect()
  .then(() =>
    app.listen(port, () =>
      console.log("server is running on port", port)
    )
  )
  .catch((err) => console.log(err));

 
