import "./Player.css";
import { useState, useEffect} from "react";
import PlayerCard from "./PlayerCard"


const Player = () => {
    const [participants, setParticipants] = useState ([])
    let choosecard = Math.floor(Math.random() * 82 + 1);
    useEffect (() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then ((res) => res.json())
        .then ((participantData) =>{
            setParticipants(participantData);
        })
    }, [])
    return (
      
        participants.filter((participants) => participants.id === choosecard).map (filteredData => (
          <div>
            <PlayerCard
            name={filteredData.name}
            image={filteredData.image}/>
          </div>
        )) 
    
    )
}

export default Player