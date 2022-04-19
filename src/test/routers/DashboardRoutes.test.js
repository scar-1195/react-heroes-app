import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {

  const contextValue = {
    user: {
      logged: true,
      name: 'Oscar'
    }
  };

  test('debe de mostrarse correctamente en la ruta de marvel', () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.text-info').text().trim() ).toBe('Oscar');
    expect( wrapper.find('h1').text().trim()).toBe('Marvel Heroes');


  });

  test('debe de mostrarse correctamente en la ruta de dc', () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/dc'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('h1').text().trim()).toBe('DC Heroes');

  });

});