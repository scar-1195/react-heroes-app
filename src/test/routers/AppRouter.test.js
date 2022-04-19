import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {

  test('debe de mostrar login si no está autenticado', () => {

    const contextValue = {
      user: {
        logged: false,
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('h1').text().trim() ).toBe('Login Screen');

  });

  test('debe de mostar el componente <MarvelScreen /> si está autenticado', () => {

    const contextValue = {
      user: {
        logged: true,
        name: 'Oscar',
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.navbar').exists() ).toBe( true );

  });

});