import './TourCard.css';
import {Link, redirect, useNavigate } from 'react-router-dom'
import imageTC1 from '../assets/img/img-tc1.jpg';
import imageCW1 from '../assets/img/chawin1.jpg';
import imageR1 from '../assets/img/road1.jpg';
import imageTC2 from '../assets/img/img-tc2.jpg';
import imageCW2 from '../assets/img/chawin2.jpg';
import imageR2 from '../assets/img/road2.jpg';
import imageTC3 from '../assets/img/img-tc3.jpg';
import imageR3 from '../assets/img/road3.jpg';
import imageTC4 from '../assets/img/img-tc4.jpg';
import imageR4 from '../assets/img/road4.jpg';
import son1 from '../assets/R2D2.mp3'




const TourCard = () => {
const navigate=useNavigate()
    let audio1 = new Audio(son1)

  const start = () => {
    audio1.play()
    navigate("/characterslist")
  }

return (
    <>        <h1 className='tourTitle'>Les tournois de la ligue intergalactique</h1>
    <div className='boxCard'>


            <div className='TourCard1'>
                <h3 className='raceTitle'>Mon Gazza</h3>
                <img src={imageTC1} alt='planète Mon Gazza' className='planetPic'></img>
                <div className='racedate'>Prochaine date : <br></br>20/12/2022</div>
                <div className='tourDesc'>DESCRIPTION
                     <br></br>
                     <br></br>
                     La dernière course du Circuit, des pods alignés à Miner's Town, décollant vers des sites de fouille. Ici, la piste s'est divisée en deux directions, puis trois, et finalement quatre; ils ont tous conduit à la même destination, les coureurs étant forcés d'esquiver les grues géantes dans le processus. Au fur et à mesure que la voie passait, les voies se divisaient en trois. Se réunissant sur une seule voie, le parcours courait à côté d'un chargeur de minerai qui pourrait détruire un podracer. La voie a ensuite pris les coureurs à travers les mines d'épices et autour d'une fosse géante de déchets industriels toxiques. Le parcours s'est frayé un chemin à travers une paire de cages à tire-bouchon et a renvoyé les coureurs à Miner's Town, où ils ont recommencé le processus.</div>
                <img src={imageR1} alt='tracé du circuit' className='racePic'></img>
                <div className='lastwin'>
                    <div className='picwin'>
                        <img src={imageCW1} alt='Général Grevious'></img>
                    </div>
                    <p className='Chrono'>PRECEDENT VAINQUEUR
                    <br></br>Chrono : 08:07</p>
                </div>
                {/* <Link to ='/CharactersList'> */}
                    <button onClick={start} className='participate'>Participer</button>
                    {/* </Link>  */}
            </div>


            <div className='TourCard2'>
                <h3 className='raceTitle'>Oovo IV</h3>
                <img src={imageTC2} alt='planète Oovo 4' className='planetPic'></img>
                    <div className='racedate'>Prochaine date : <br></br>19/01/2023</div>
                     <div className='tourDesc'>DESCRIPTION
                     <br></br>
                     <br></br>
                     Executioner était un parcours de podracing sur Oovo IV et la première course du Galactic Podracing Circuit. Cette piste avait la réputation de mettre fin à la carrière des pilotes de podracing. Pour rendre la course divertissante, les gardiens de la prison ont fait en sorte que les tubes d'antigravité du parcours soient remplis de minerai à écraser. De nouveau à l'arène, les podracers ont fait leur chemin à travers une assez grande avenue, qui s'est bientôt rétréci que deux murs massifs a ramené le diamètre à un seul coureur. Au fur et à mesure que le parcours descendait dans le premier tube d’antigravité, une voie alternative pouvait être trouvée au-dessus. De retour à la gravité normale, la piste s'est redressée jusqu'à ce que les coureurs rencontrent le tube suivant, à 90 degrés sous eux. L'entrée de l'arbre était au sol, donc les pilotes ont dû ralentir. Ils sont sortis sur une ligne droite, où les nacelles ont traversé une zone de transit entourée d'un champ d'énergie. Un type de zone d'égout était suivant, avec quatre tunnels séparés à choisir. Comme ces tunnels convergeaient, les coureurs sont entrés dans un tube de gravité zéro ; près de l'entrée de ce tube, le bec d'un Exogorth a percé le mur. Finalement, les pilotes ont atterri en direction de l'arène pour terminer le tour.</div>
                      <img src={imageR2} alt='tracé du circuit' className='racePic'></img>
                <div className='lastwin'>
                    <div className='picwin'>
                        <img src={imageCW2} alt='Mars Guo'></img>
                    </div>
                    <p className='chrono'>PRECEDENT VAINQUEUR
                    <br></br>Chrono : 10:06</p>
                </div>
                <button onClick={start} className='participate'>Participer</button>
            </div>


            <div className='TourCard3'>
                <h3 className='raceTitle'>Tatooine</h3>
                <img src={imageTC3} alt='planète Tatooine' className='planetPic'></img>
                <div className='racedate'>Prochaine date : <br></br>04/05/2023</div>
                <div className='tourDesc'>DESCRIPTION
                     <br></br>
                     <br></br>
                     Le Mos Espa Circuit, également connu sous le nom de Mos Espa Raceway ou Mos Espa Podrace, et plus tard le Old Mos Espa Arena Circuit, était une piste de podracing et plus tard de swoop-racing située sur la planète désertique de Tatooine près de Mos Entha. Mos Espa Ciruit était l'endroit où la podrace Boonta Eve Classic avait lieu chaque année. Suite au déclin de la popularité du podracing avec le départ du spectacle public et Jabba Desilijic Tiure, le plus puissant des gangsters Hutt sur Tatooine, déplacé de la ville portuaire de Mos Espa au profit de la ville croissante de Mos Eisley, la course a été en grande partie abandonné. Pendant la Guerre Civile Galactique, les groupes locaux de swoop ont utilisé cette piste pour leurs propres courses. La célèbre course est désormais de retour !</div>
                <img src={imageR3} alt='tracé du circuit' className='racePic'></img>
                <div className='lastwin'>
                    <div className='picwin'>
                        <img src={imageCW1} alt='Général Grevious'></img>
                    </div>
                    <p className='chrono'>PRECEDENT VAINQUEUR
                    <br></br>Chrono : 13:06</p>
                </div>
                <button onClick={start} className='participate'>Participer</button>
            </div>


            <div className='TourCard4'>
                <h3 className='raceTitle'>Ord Ibanna</h3>
                <img src={imageTC4} alt='planète Ord Ibanna' className='planetPic'></img>
                <div className='racedate'>Prochaine date : <br></br>20/12/2022</div>
                <div className='boxRace'>
                    <div className='tourDesc'>DESCRIPTION
                         <br></br>
                         <br></br>
                         Dethro's Revenge était un parcours de podracing sur Ord Ibanna et la cinquième course du Galactic Podracing Circuit. Dethro Glok a conçu le parcours sans beaucoup de virages serrés (ce qui s'est avéré gênant pour les acrophobes) et a aimé entendre les pilotes crier chaque fois qu'ils tombaient dans le vide gazeux. Les coureurs avec une grande vitesse et des freins décents se sont bien débrouillés avec ce parcours. J'avais un soucis avec mon CSS du coup il faut que je rajoute du texte dans cette description pour que ce soit plus harmonieux et harmonisé avec les autres Card... Quoi vous lisez vraiment mes descriptions ? Wow, ça me fait trop plaisir ! C'est vrai que c'est plus simple des lorem ipsum, mais franchement le latin ça me manque moyen-moyen... Trop passé de temps avec Tacite et cie... Mais bon là  n'est pas la question... Vous êtes toujours là ? C'est gentil mais on va pouvoir s'arrêter là j'ai comblé assez d'espace. </div>
                    <img src={imageR4} alt='tracé du circuit' className='racePic'></img>
                    <div className='lastwin'>
                        <div className='picwin'>
                        <img src={imageCW2} alt='Mars Guo'></img>
                        </div>
                        <p className='chrono'>PRECEDENT VAINQUEUR
                        <br></br>Chrono : 13:06</p>
                    </div>
                <button onClick={start} className='participate'>Participer</button>
                </div>
            </div>
    </div>
    </>
);
};


export default TourCard