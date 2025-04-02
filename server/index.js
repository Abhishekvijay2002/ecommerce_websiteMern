const express = require('express');
const app = express();
const mongoose = require('mongoose');
const manageRouter = require('./routes/routerManger');
const port = 3000;
app.use(express.json());
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv').config()

mongoose.connect("mongodb+srv://abhishek8102tech:YV0QKYaeiHvDKCPP@cluster0.9aqpa.mongodb.net/ecommerce").then((res) =>{
    console.log("DataBase Connection Successful");
}).catch((err) =>{
    console.log(err);
})
app.use(cookieparser())
app.use("/api",manageRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
