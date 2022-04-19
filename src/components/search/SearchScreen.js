import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroByName';
import HeroCard from '../heroes/HeroCard';
import { useMemo } from 'react';

const SearchScreen = () => {

  //? useLocation es un hook que nos retorna los queries params de la ruta en la que estamos
  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo( () => getHeroesByName(q), [q] );
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }
  
  return (
    <>
      <h1>Super Hero Searchs</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input
              autoComplete='off'
              className='form-control'
              name='searchText'
              onChange={ handleInputChange }
              placeholder='Find a super hero'
              type='text'
              value={ searchText }
            />

            <button className='btn btn-outline-primary mt-1 w-100' type='submit'>
              Find
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? <div className='alert alert-info'>Find a super hero</div>
              : ( heroesFiltered.length === 0 )
                && <div className='alert alert-danger'>{q} dont exist</div>
          }

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={ hero.id }
                {... hero }
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default SearchScreen;