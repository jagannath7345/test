const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/productRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/test-product")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server Runing on PORT ${PORT}`);
});
