const Player = require("../models/team.models");

module.exports = {
    createPlayer(req, res) {
        Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.json(err));
    } ,
    
    getAllPlayers(_, res){
        Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err));
    },

    deletePlayer(req, res){
        Player.findByIdAndDelete(req.params.id)
            .then(deletedproduct => res.json({status: "succesfully deleted!"}))
            .catch(err => res.json(err));
    },

    getOnePlayer(req, res){
        Player.findOne({_id: req.params.id})
            .then(player => res.json(player))
            .catch(err => res.json(err))
    }
   
}

