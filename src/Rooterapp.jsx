
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooternav from './Rooternav.jsx';
<<<<<<< HEAD
import { Box } from '@mui/material';


// listMusics()

const Home = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="center" alignItems="start"
    flexDirection="column" fontSize="32px">

    Olá! seja bem vindo ao nosso site sobre músicas.
    <p></p>
    Na aba Sobre, poderá conferir os detalhes sobre o projeto.
    <p></p>

    aqui estão alguns destaques para pesquisa:

  </Box>
);


const Sobre = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="center" alignItems="start"
    flexDirection="column" fontSize="32px">
    <h2>Sobre</h2>
    <p>Esta é a página sobre.</p>
  </Box>
);


const Musicas = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="space-around" alignItems="start"
    flexDirection="" fontSize="12px"
    color="black">
    
<Box
width="95%"
height="95%"
bgcolor="#cccccc"> 


        <a> <h1>Liniker</h1></a>
        <p><a href="https://open.spotify.com/intl-pt/track/7tmvvRmUqzCRjRx9ub8K7i">Caju</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/21nV7Brjy93nQPM98QwIfr">Veludo marrom</a></p>
        <p><a href="https://open.spotify.com/search/tudo%20liniker">Tudo</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/7ELT2o6bfErbCLpC16WOsd">Me ajude a salvar os domingos</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/5veL5yeni75MC7zZ8ne1gS">Ao teu lado part. ANAVITÓRIA e Amaro Freitas</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/1xwvLAIPpG8qQ      JyWRLi4F3">Febre</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3UTmOnTzGaiMZoOGxkpRMx">Negona dos olhos terríveis part. BaianaSystem</a></p>
        <p><a href="https://open.spotify.com/intl-pt/album/5L6mWS7aEOkwccUOmR8PnE">Seus recados part. Ivete Sangalo</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3XIiRlcc1bKUegBbJ17iVp">Popstar</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3f1lEgEorble8TWplM949r">Pote de ouro part. Priscila Senna</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3L1IBHaO1TV4gF8JbKGWQx">Só especial feat Tropkillaz</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/5v3dDDH14tXlNkgcKxhplo">Papo de Edredom part. Melly</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/7egvslE9Hj0hAlr5t7sC7D">Take your time e relaxe</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/1h1uyRSbfQYgckDfb9EeyQ">Deixa estar part. Lulu Santos e Pabllo Vittar</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/6Ry9Jqt3riMhgX46T6XwdL">Baby 95</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/2I4q9E4wcSt4vIcMmbymwL">Mayonga</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/0dBo1a9Tvxtx9x2N4cTL1w">Psiu</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/38zhkcKqpewDo3MrMF2G0E">Lini</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/1NBSSZmo54UOHhG02BqiY7">Antes de Tudo</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/5rXImfTVWzTmfjfGnY9IWM">Claus</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/7tmvvRmUqzCRjRx9ub8K7i">Cifras</a></p>
        </Box>

      <br></br>



      <Box
width="95%"
height="95%"
bgcolor="#cccccc">
        <a> <h1>Racionais</h1></a>
        <p><a href="https://open.spotify.com/intl-pt/track/6m8AgjfI28ER6odzMxmHtR">Vida Loka, Part 1</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/7wglwZzZoWUr8sOECwpu6L">Diário de um Detento</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/4mZu6NuOntvYZqCZPrxTqT">A vida é um Desafio</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3ytXzEJFeVydFfmUhHvti8">Nego drama</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/5wZUvwWGKaZ6NG8yckZcTM">Jesus Chorou</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/6m8AgjfI28ER6odzMxmHtR">Vida Loka, Part 2</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3UTmOnTzGaiMZoOGxkpRMx">Eu sou 157</a></p>
        <p><a href="https://open.spotify.com/intl-pt/album/5L6mWS7aEOkwccUOmR8PnE">Da Ponte Pra Cá</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3XIiRlcc1bKUegBbJ17iVp">Capítulo 4, Versículo 3</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3f1lEgEorble8TWplM949r">Estilo Cachorro</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/3L1IBHaO1TV4gF8JbKGWQx">Homem Na Estrada</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/5v3dDDH14tXlNkgcKxhplo">Sou Eu + Você</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/7egvslE9Hj0hAlr5t7sC7D">Fórmula Mágica da Paz</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/1h1uyRSbfQYgckDfb9EeyQ">Jorge da Capadócia</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/6Ry9Jqt3riMhgX46T6XwdL">Tô Ouvindo Alguém Me Chamar</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/2I4q9E4wcSt4vIcMmbymwL">Fim de Semana No Parque</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/0dBo1a9Tvxtx9x2N4cTL1w">A Vítimca</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/38zhkcKqpewDo3MrMF2G0E">Expresso da Meia-Noite</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/1NBSSZmo54UOHhG02BqiY7">1 Por Amor, 2 Por Dinheiro</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/5rXImfTVWzTmfjfGnY9IWM">Mágico de Oz</a></p>
        <p><a href="https://open.spotify.com/intl-pt/track/7tmvvRmUqzCRjRx9ub8K7i">Cifras</a></p>
      </Box>


  </Box>
);

const Cantores = () => (
  <Box bgcolor="" width="87%" height="100%"
    display="flex" justifyContent="center" alignItems="start"
    flexDirection="column" fontSize="32px">
    <h2></h2>
    <p>Bem-vindo à página inicial!</p>
  </Box>
);
=======
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
<<<<<<< HEAD
<Box display="flex" justifyContent="center" alignItems="start">
    <p>Liniker!</p>
  </Box>
  
>>>>>>> origin/main
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
<<<<<<< HEAD
    <p></p>
=======
    <p>O Brasil é um país de grande diversidade cultural, e essa riqueza se reflete diretamente nos estilos musicais brasileiros. 
      Cada região desenvolveu estilos únicos, que hoje fazem parte da identidade musical nacional.
    </p>
    <p>Talvez um fator importante tenha sido a mescla de culturas que formaram o nosso país: com os ritmos e cantos africanos, 
      as músicas eruditas europeias e até os ritos tradicionais indígenas, a história da nossa música já começou cheia de influências.
    </p>

>>>>>>> origin/main

  </Box>
);

<<<<<<< HEAD
=======
const Jao = () => (<Yjao />
);

=======
>>>>>>> origin/main

>>>>>>> origin/main
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
<<<<<<< HEAD
=======
        <Route path="/cantores_liniker" element={<Liniker />} />
        <Route path="/cantores_sabotage" element={<Sabotage />} />
        <Route path="/cantores_mano_brown" element={<Manobrown />} />
        <Route path="/cantores_gabriel_ribeiro" element={<Gabrielribeiro />} />
        <Route path="/cantores_jao" element={<Jao />} />
        
>>>>>>> origin/main
      </Routes>
    </Router>
  );
};

export default Rooterapp;
