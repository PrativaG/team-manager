const mongoose = require("mongoose");



const PlayerSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 2,
        required : [
            true,
            "Name must be at least 2 characters in length"
        ]
    },
    position: {
        type : String,
    },
    status : {
        type: String
    }, 
    game1 :{
        type: String,
        default : 'unknown'
    },
    game2:{
        type: String,
        default : 'unknown'
    }
    
}, {timestamps: true})



const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;

