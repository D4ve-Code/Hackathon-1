import { useParams } from 'react-router-dom';
import '../components/card.css'

const Card =(props) => {
    let { result } = useParams();   
    let Link = () => {     
        window.location.href = "http://127.0.0.1:5500/index.html";   
    };
    return (
        <div className="cards">
        
           <button className='click'onClick={Link}><img className='selectionImage' src={props.image} alt={props.name} onClick={()=>props.setButton(props.id)}/></button>
           
          <p className='titre'>{props.name}</p>
              
        </div>
    );
};

export default Card
