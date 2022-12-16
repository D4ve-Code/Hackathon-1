import './ActuCard.css';
import imageA1 from '../assets/img/image-A1.jpg';
import imageA2 from '../assets/img/image-A2.jpeg';
import imageA3 from '../assets/img/image-A3.jpg';
import imageA4 from '../assets/img/image-A4.jpg';


const ActuCard = () => {
return (
    <><h2>En ce moment dans la galaxie</h2>
    <div className='BoxArt'>  
        <div className='Actu'>
            <h3>Accident mortel sur le circuit</h3>
            <img src={imageA1} alt="stormtroppers en légo sur un brancart" className='imgactu'/>
            <div className='Article1'> On nous annonce que le cousin de Bobba Fett aurait succombé à ses blessures suite à un virage râté lors du circuit de Naboo. D'après nos sources il aurait été déconcentré en apercevant la nouvelle coiffure de la princesse Amidala.</div>
            <p>Date : 10/12/2022</p>
         </div>
         <div className='Actu'>
             <h3>Chewbacca licencié</h3>
             <img src={imageA2} alt="Chewbacca triste" className='imgactu' />
             <div className='Article2'>Chewbacca ne commentera plus aucune course. Il a été radié de la guilde des commentateurs. Il était temps ! Sérieux, vous compreniez un traitre mot ?!</div>
             <p>Date : 10/12/2022</p>
         </div>
         <div className='Actu'>
             <h3>Corruption au sein de la fédération</h3>
             <img src={imageA3} alt="Poe Dameron menotté entouré de deux stormtroopers" className='imgactu' />
             <div className='Article3'>Poe Dameron a été interpellé ce matin en flagrant délit de tentative de soudoiement. Il semblerait qu'il versait d'énormes pots-de-vin pour truquer les courses. Une honte !  </div>
             <p>Date : 10/12/2022</p>
         </div>
         <div className='Actu'>
             <h3>Sensation musicale</h3>
             <img src={imageA4} alt="Yoda en rappeur" className='imgactu' />
             <div className='Article4'>Le nouveau crew de rap BOOBA FEST et son leader maître Yoey Starwars se produira à l'inauguration de la 42ème édition du circuit de Tatooine.  </div>
             <p>Date : 10/12/2022</p>         
         </div>
</div>
</>
);
};


export default ActuCard