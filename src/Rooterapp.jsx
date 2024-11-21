
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooternav from './Rooternav.jsx';
import Musicass from './Musicass.jsx';
import Homes from './Homes.jsx';
import Sobres from './Sobres.jsx';
import Cantoress from './Cantoress.jsx';
import Bandass from './Bandass.jsx';
import Estiloss from './Estiloss.jsx';
import Yliniker from './Yliniker.jsx';
import Ysabotage from './Ysabotage.jsx';
import Ymanobrown from './Ymanobrown.jsx';
import Ygabrielribeiro from './Ygabrielribeiro.jsx';
import Yjao from './Yjao.jsx';

// listMusics()

const Home = () => (<Homes />
);

const Sobre = () => (<Sobres />
);

const Musicas = () => (<Musicass />
);

const Cantores = () => (<Cantoress />
);

const Bandas = () => ( <Bandass />
);

const Estilos = () => (<Estiloss />
);

const Liniker = () => (<Yliniker />
);

const Sabotage = () => (<Ysabotage />
);

const Manobrown = () => (<Ymanobrown />
);

const Gabrielribeiro = () => (<Ygabrielribeiro />
);

const Jao = () => (<Yjao />
);

const Rooterapp = () => {
  return (
    <Router>

      <Rooternav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/cantores" element={<Cantores />} />
        <Route path="/bandas" element={<Bandas />} />
        <Route path="/estilos" element={<Estilos />} />
        <Route path="/cantores_liniker" element={<Liniker />} />
        <Route path="/cantores_sabotage" element={<Sabotage />} />
        <Route path="/cantores_mano_brown" element={<Manobrown />} />
        <Route path="/cantores_gabriel_ribeiro" element={<Gabrielribeiro />} />
        <Route path="/cantores_jao" element={<Jao />} />
        
      </Routes>
    </Router>
  );
};

export default Rooterapp;
