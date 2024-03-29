import { useState, FormEvent, useRef, useEffect } from 'react';
// import { useHistory } from 'react-router';

import { api } from '../../services/api';
//components
import Header from '../../Components/Header';

//styles
import { HomeStyles, InputStyles } from './styles';

//assets
import versionControl from '../../assets/versionControl.svg';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const History = useHistory();
  const inputElement = useRef() as any;
  const [repositories, setRepositories] = useState('');
  const [profile, setProfile] = useState([]);
  async function handleSubimit(e: FormEvent) {
    e.preventDefault();

    if (repositories.trim() === '') {
      return;
    }
    setRepositories('');
    inputElement.current.focus();
    const response = await api.get(`${repositories}`);
    console.log(response.data);
    setProfile(response.data);
    History.push(`/${repositories}`);
  }

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(profile));
  }, [profile]);

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
                ref={inputElement}
                onChange={({ target }) => setRepositories(target.value)}
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
