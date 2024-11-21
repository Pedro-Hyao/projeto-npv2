import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Pagina = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      {/* Texto explicativo sobre a importância dos artistas */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Artistas Famosos de Araraquara e Américo Brasiliense
        </Typography>
        <Typography variant="body1" paragraph>
          Araraquara e Américo Brasiliense são berços de grandes talentos musicais que têm se destacado no cenário
          nacional. Com estilos variados que vão do soul à música brasileira, pop, rock e jazz, esses artistas estão
          deixando sua marca na música brasileira contemporânea.
        </Typography>
      </Box>

      {/* Layout lado a lado de todos os artistas */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 4, flexWrap: 'wrap' }}>
        
        {/* Artista Liniker */}
        <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2, flex: 1, minWidth: '280px' }}>
          <Button variant="contained" color="primary" fullWidth>
            Liniker
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Liniker é uma cantora e compositora araraquarense que ganhou reconhecimento mundial com sua mistura única de
            música brasileira e soul. Ela ficou conhecida pelo trabalho com a banda Liniker e os Caramelows, e desde
            que iniciou sua carreira solo, sua música continuou a conquistar corações com letras que falam sobre amor,
            identidade e pertencimento. Seu álbum "Caju" (2020) é um marco na sua carreira, refletindo sua evolução pessoal
            e artística.
          </Typography>
        </Box>

        {/* Artista Morgana Kurmann */}
        <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2, flex: 1, minWidth: '280px' }}>
          <Button variant="contained" color="primary" fullWidth>
            Morgana Kurmann
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Morgana Kurmann é uma cantora e compositora de Araraquara, com um repertório que mistura pop, rock, blues e
            jazz. Ela também se destaca como arquiteta e professora de canto, além de ser reconhecida por seu disco "Hurricane"
            (2018) e por sua participação em diversos festivais de música. Sua carreira é marcada por uma busca constante de
            inovação e por parcerias com artistas renomados, trazendo sempre algo novo ao público.
          </Typography>
        </Box>

        {/* Artista Adriana Gennari */}
        <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2, flex: 1, minWidth: '280px' }}>
          <Button variant="contained" color="primary" fullWidth>
            Adriana Gennari
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Adriana Gennari é uma cantora de Araraquara, conhecida por suas performances no jazz e bossa nova. Ela lançou
            vários discos, incluindo "Arqueólogo das Estrelas" e "Vida Inteligente", e também atua como coach vocal e professora
            de musicalização infantil, compartilhando sua paixão pela música com novas gerações.
          </Typography>
        </Box>

        {/* Artista Ekena */}
        <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2, flex: 1, minWidth: '280px' }}>
          <Button variant="contained" color="green" fullWidth>
            Ekena
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Ekena é uma cantora e compositora de Araraquara, cuja música mistura pop e MPB. Seu álbum "Nó" (2017) e singles como
            "Tereza" e "Me Perdoa" são exemplos de seu estilo versátil, com letras profundas que abordam questões pessoais e
            sociais, sempre com uma sonoridade cativante e envolvente.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default Pagina;
