import { useMemo } from 'react';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';

const HeroesList = ({ publisher }) => {

  const heroes = useMemo( () => getHeroByPublisher(publisher), [publisher]) ;

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map( hero => (
          <HeroCard 
            key={ hero.id }
            { ...hero }
          />
        ))
      }
    </div>
  )
}

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired
}

export default HeroesList;