import "../components/PlayerCard.css"

const PlayerCard = (props) => {
    return (
        <div className="card">
          <img src={props.image} alt={props.name}/>
          <p>{props.name}</p>
        </div>
    )
}
export default PlayerCard