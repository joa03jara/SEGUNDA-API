const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/user", (req,res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get all users
router.get("/user", (req,res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get a users
router.get("/user/:id", (req,res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update a users
router.put("/user/:id", (req,res) => {
    const { id } = req.params;
    const { nombre, edad, fecha_de_nacimineto, email ,sexo} = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { nombre, edad, fecha_de_nacimineto, email ,sexo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//delete a users
router.delete("/user/:id", (req,res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;
