const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const initRoutes = require("./routes");
const app = express()
console.log(process.env.PORT)
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dbConnect()
initRoutes(app)

app.use("/",(req,res)=>{res.send("server on")})
app.listen(port,()=>{
    console.log("server running on the port "+port)
})