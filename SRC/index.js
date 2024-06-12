const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./Routes/user");
const bienesRoutes = require("./Routes/bienes");


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", bienesRoutes);


//routes
app.get ("/", (req,res ) => {
    res.send("Bienvenido a mi API");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado al MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log ("servidor listo en el puerto", port));

