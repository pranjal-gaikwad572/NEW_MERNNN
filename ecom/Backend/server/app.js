require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 8000;

app.get("/", (request, response) => {
  res.send("Hii, I am Live");
});

const users_routes = require("./routes/users");

//middleWare: to add routers:
app.use("/api/users", users_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    app.listen(PORT, () => {
      console.log(`${PORT} Yes i am connected....!!`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();