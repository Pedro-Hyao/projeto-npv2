
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

 codespace-sinister-skull-r4rg696jjr7wcxvqj
const Sabotage = () => (<Ysabotage />
);

const Manobrown = () => (<Ymanobrown />
);

const Gabrielribeiro = () => (<Ygabrielribeiro />

const Cantores = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="center" alignItems="center"
    flexDirection="column" fontSize="32px">
    <h2>Principais cantores</h2>
    
  </Box>
);
<Box display="flex" justifyContent="center" alignItems="start">
    <p>Liniker!</p>
  </Box>
  
const Bandas = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="center" alignItems="start"
    flexDirection="column" fontSize="32px">
    <h2>primeira pagina</h2>
    <p>Bem-vindo à página inicial!</p>
  </Box>
);
const Estilos = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="center" alignItems="start"
    flexDirection="column" fontSize="32px">
    <h2>Estilos importantes na música cultural Paulista.</h2>
    <p>O Brasil é um país de grande diversidade cultural, e essa riqueza se reflete diretamente nos estilos musicais brasileiros. 
      Cada região desenvolveu estilos únicos, que hoje fazem parte da identidade musical nacional.
    </p>
    <p>Talvez um fator importante tenha sido a mescla de culturas que formaram o nosso país: com os ritmos e cantos africanos, 
      as músicas eruditas europeias e até os ritos tradicionais indígenas, a história da nossa música já começou cheia de influências.
    </p>


  </Box>
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
