const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({extended : true}));

require("./server/config/mongoose.config");
require("./server/routes/team.routes")(app);

app.listen(8000, ()=>console.log( "Listening on port 8000"));