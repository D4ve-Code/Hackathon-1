import "../components/ParticipantsCard.css"

const participantsCard = (props) => {
    return (
        <div className="card">
          <img src={props.image} alt={props.name}/>
          <p>{props.name}</p>
        </div>
    )
}
export default participantsCard