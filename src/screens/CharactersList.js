import './CharactersList.css';
import  { useState, useEffect } from "react";
import Card from '../components/card'

const CharactersList = (props) => {
    const [characters, setCharacters] = useState ([])
console.log (props)
    useEffect (() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
         .then((res) => res.json())
         .then((pouletData) => {
         setCharacters(pouletData);
    console.log(pouletData)
        });
    }, []);
    
    return (

     <div className = "List">
             <h1> select your characters </h1>
            
        <div className ="ListCardsHuman">
            {
                characters.filter((characters) => characters.id === 1 || characters.id === 3  || characters.id === 5 || characters.id === 10 || 
                characters.id === 11 || characters.id === 13 || characters.id === 14 || characters.id === 20 || characters.id === 44).map(filteredPoulet => (
            <div>
                    <Card
                    name={filteredPoulet.name}
                    image={filteredPoulet.image}
                    setButton={props.setButton}
                    id={filteredPoulet.id}/>
            </div> 
            
                    
                ))}
        </div>
     </div>
    );
}

export default CharactersList