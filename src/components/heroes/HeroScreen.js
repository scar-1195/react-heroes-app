import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { heroesImages } from '../../helpers/heroesImages';
import { getHeroById } from '../../selectors/getHeroById';
//? import batman from '../../assets/dc-batman.jpg'; importacion de un recurso estatico


const HeroScreen = () => {

  //? useParamas es un hook que nos retorna los parametros del path y la variable definida en la ruta dentro del router
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(heroId), [heroId] );

  const handleReturn = () => {
    navigate(-1);
  }

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  // const imgPath = `/assets/${ id }.jpg`;

  return (
    <div className="row mt-5">
      
      <div className="col-4">
        <img 
          // src={ imgPath } desde public/assets
          // src={ batman } import estatico
          src={ heroesImages(`./${ id }.jpg`) }
          className='img-thumbnail animate__animated animate__fadeInLeft' 
          alt={ superhero } />
      </div>

      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{ superhero }</h3>
        
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            {' '}
            <b>Alter ego:</b> { alter_ego }
          </li>
          
          <li className='list-group-item'>
            {' '}
            <b>Publisher:</b> { publisher }
          </li>
          
          <li className='list-group-item'>
            {' '}
            <b>First Appearance:</b> { first_appearance }
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{ characters }</p>

        <button className='btn btn-outline-info' onClick={ handleReturn }>
          Back
        </button>
      </div>

    </div>
  );
}

export default HeroScreen;