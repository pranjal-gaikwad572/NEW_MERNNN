const express = require("express");
const app = express();

const PORT = process.env.PORT || 7000;
app.get("/", (req,res)  => {
    res.send("Hii, I am Live");
})

const users_routes = require("./routes/users")

//middleWare: to add routers:
app.use("/api/users", users_routes)

const start = async () => 
{
try {
    app.listen(PORT, () =>
{
   console.log( `${PORT} Yes i am connected....!!`)
});
} catch (error) {
    console.log(error);
}
}