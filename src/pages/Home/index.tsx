import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { api } from '../../services/api';
//components
import Header from '../../Components/Header';

//styles
import { HomeStyles, InputStyles } from './styles';

//assets
import versionControl from '../../assets/versionControl.svg';

const Home = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then((response) => {
      setRepositories(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <HomeStyles>
        <img src={versionControl} alt="" />
        <div className="wrapperInput">
          <h1>Busque por perfis no Github</h1>
          <InputStyles>
            <input type="text" placeholder="Digite o nome do perfil" />
            <button> Buscar </button>
          </InputStyles>
        </div>
      </HomeStyles>
    </>
  );
};

export default Home;
