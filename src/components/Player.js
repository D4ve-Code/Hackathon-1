import { useState, useEffect} from "react";

import PlayerCard from "./PlayerCard"

import "./Player.css";

const Player = ({playerchoice}) => {
    console.log(playerchoice)

    const [participants, setParticipants] = useState ([])
    // let choosecard = {playerchoice};
    useEffect (() => {
        fetch(`https://miadil.github.io/starwars-api/api/id/${playerchoice}.json`)
        .then ((res) => res.json())
        .then ((participantData) =>{
            setParticipants(participantData);
        })
    }, [])
    return (
      <>
           <div>
                <PlayerCard name={participants.name} image={participants.image}/>
          </div>
        {console.log(participants)}
        </>
        // participants.filter((participants) => participants.id ===  1 //choosecard
        //  ).map (filteredData => (
        //   <div>
        //     <PlayerCard
        //     name={filteredData.name}
        //     image={filteredData.image}/>
        //   </div>
        // )) 
    
    )
}

export default Player