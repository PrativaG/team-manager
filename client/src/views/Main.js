import React from 'react';
import {Link} from '@reach/router';

const Main = () =>{
    return (
        <div>
            <Link to="/players/list">Manage Player</Link>
            <Link to="/status/game/1">Manage Player Status</Link>

        </div>
    )
}
export default Main;