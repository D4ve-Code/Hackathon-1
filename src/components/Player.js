import "./Player.css";
import { useState, useEffect} from "react";
import PlayerCard from "./PlayerCard"


const Player = () => {
    const [participants, setParticipants] = useState ([])
    // let choosecard = {playerchoice};
    useEffect (() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then ((res) => res.json())
        .then ((participantData) =>{
            setParticipants(participantData);
        })
    }, [])
    return (
      
        participants.filter((participants) => participants.id ===  1 //choosecard
         ).map (filteredData => (
          <div>
            <PlayerCard
            name={filteredData.name}
            image={filteredData.image}/>
          </div>
        )) 
    
    )
}

export default Player