const express = require("express");
const userSchema1 = require("../models/bienes");

const router = express.Router();

//create user
router.post("/bienes", (req,res) => {
    const bienes = userSchema1(req.body);
    bienes
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get all users
router.get("/bienes", (req,res) => {
    userSchema1
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get a users
router.get("/bienes/:id", (req,res) => {
    const { id } = req.params;
    userSchema1
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update a users
router.put("/bienes/:id", (req,res) => {
    const { id } = req.params;
    const { domicilio, estado_civil } = req.body;
    userSchema1
    .updateOne({ _id: id }, { $set: { domicilio, estado_civil}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//delete a users
router.delete("/bienes/:id", (req,res) => {
    const { id } = req.params;
    userSchema1
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;
