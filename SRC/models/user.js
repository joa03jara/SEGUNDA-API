const mongoose = require ("mongoose");
const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        required: true
    },
    fecha_de_nacimiento: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    }
});

module.exports =mongoose.model("User", userSchema);
