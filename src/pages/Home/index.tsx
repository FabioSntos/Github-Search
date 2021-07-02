import { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router';

import { api } from '../../services/api';
//components
import Header from '../../Components/Header';

//styles
import { HomeStyles, InputStyles } from './styles';

//assets
import versionControl from '../../assets/versionControl.svg';

const Home = () => {
  const History = useHistory();

  const [repositories, setRepositories] = useState('');

  async function handleSubimit(e: FormEvent) {
    e.preventDefault();

    if (repositories.trim() == '') {
      return;
    }
    console.log(repositories);
  }
  useEffect(() => {
    api.get(`${repositories}`).then((res) => {
      setRepositories(res.data);
    });
  }, [repositories]);

  return (
    <>
      <Header />
      <HomeStyles>
        <img src={versionControl} alt="" />
        <div className="wrapperInput">
          <h1>Busque por perfis no Github</h1>
          <InputStyles>
            <form onSubmit={handleSubimit}>
              <input
                type="text"
                placeholder="Digite o nome do perfil"
                onChange={(event) => setRepositories(event.target.value)}
                value={repositories}
              />
              <button type="submit">Buscar</button>
            </form>
          </InputStyles>
        </div>
      </HomeStyles>
    </>
  );
};

export default Home;
