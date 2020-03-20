import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
// import {Form, Button, Row, Col} from 'react-bootstrap';

const NewPlayer = () => {
    const [player, setPlayer] = useState(null);

    const submitHandler = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/players", player)
             .then(() => navigate("/players/list"))
             .catch(err => console.log);
    }
     
    const changeHandler = event =>{
        let {name, value} = event.target;
        setPlayer({
            ...player,
            [name] :value
        })
    }

   
    console.log("Hey from create player");
    return(
        <> 
          <h2>Add new Player</h2>
           <form onSubmit={submitHandler}>
               <label>Player Name:</label>
               <input name="name" type="text" onChange={changeHandler}/> <br/>
               <label>Preferred Position: </label>
               <input name="position" type="text" onChange={changeHandler}/> <br/>
               <button type="submit">Add</button>
           </form>
        
        </>

    )
}

export default NewPlayer;