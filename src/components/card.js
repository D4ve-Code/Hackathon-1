import '../components/card.css'

const card =(props) => {
 
        
    
    return (
        <div className="cards">
           <button><img src={props.image} alt={props.name} onClick={()=>props.setButton(props.id)}/></button>
           <p>{props.name}</p>
              
        </div>
    );
};

export default card
