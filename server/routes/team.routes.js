const PlayerCtl = require("../controllers/team.controllers");

module.exports = app => {
    app.get("/api/players", PlayerCtl.getAllPlayers);
    app.post("/api/players", PlayerCtl.createPlayer);
    app.delete("/api/players/:id", PlayerCtl.deletePlayer);
    app.get("/api/players/:id", PlayerCtl.getOnePlayer);
}