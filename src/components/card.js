import { useParams } from 'react-router-dom';
import '../components/card.css'

const Card =(props) => {
    let { result } = useParams();   
    let Link = () => {     
        window.location.href = `http://127.0.0.1:5500/index.html?id=${props.id}`;   
    };
    return (
        <div className="cards">
        
           <button onClick={Link}><img src={props.image} alt={props.name} onClick={()=>props.setButton(props.id)}/></button>
           
          <p>{props.name}</p>
              
        </div>
    );
};

export default Card
