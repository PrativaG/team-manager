import React from 'react';
import './App.css';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import ManagePlayer from './views/ManagePlayer';
import PlayerStatus from './views/PlayerStatus';
import NewPlayer from './components/NewPlayer';
import PlayerList from './components/PlayersList'; 
function App() {
  return (
    <div className="App">
      <Main/>
      <Router>
      <ManagePlayer path="/players/list"/>
      </Router>
      <Router>
        <PlayerStatus path="/status/game/:id"/>
      </Router>
      <Router>
      <NewPlayer path="/players/addplayer"/>
      <PlayerList path="/players/list"/>
      </Router>
    </div>
  );
}

export default App;
