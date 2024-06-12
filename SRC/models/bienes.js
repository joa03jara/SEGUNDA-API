const mongoose = require ("mongoose");
const userSchema1 = mongoose.Schema({
    domicilio: {
        type: String,
        require: true
    },
    estado_civil: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Bienes", userSchema1);