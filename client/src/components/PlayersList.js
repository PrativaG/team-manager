import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
             .then(res => {
                 console.log(res.data);
                 setPlayers(res.data);
                })
    }, [])

    const handleDelete = (event) =>{
        let id = event.target.value;
        axios.delete("http://localhost:8000/api/players/" +id)
        .then(() => {
            const newList = players.filter(pl => pl._id !== id);
            setPlayers(newList);
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preffered Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {players.length !== 0 
                    ? players.map( player =>(
                       <tr key={player._id}>
                           <td>{player.name}</td>
                           <td>{player.position} </td>
                           <td><button value={player._id} onClick={handleDelete}>Delete</button></td>
                       </tr>
                      ))
                    :<tr> 
                        <td>Please add players</td>
                    </tr>    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList;