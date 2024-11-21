import { Box, Typography, Container } from "@mui/material";



function Yliniker() {


  return (
    <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh", padding: "20px" }}
    width="87%" height="100%">
      {/* Cabeçalho */}
      <Box sx={{ bgcolor: "#4CAF50", color: "white", padding: "20px 0" }}>
        <Container>
          <Typography variant="h4" align="center">
            Projeto NPV: Liniker
          </Typography>
          <Typography variant="subtitle1" align="center">
            Especial: Liniker, a Voz da Diversidade
          </Typography>
        </Container>
      </Box>

      {/* Conteúdo Principal */}
      <Container>
        <Box
          sx={{
            bgcolor: "white",
            boxShadow: 2,
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          {/* Seções */}
          <Box mb={4}>
            <Typography variant="h5" color="green" gutterBottom>
              Quem é Liniker?
            </Typography>
            <Typography>
              Liniker é uma <strong>cantora, compositora e atriz brasileira</strong>, conhecida
              por sua voz poderosa e sua representatividade como mulher trans.
              Nascida em Araraquara, São Paulo, em 1995, ela mistura MPB, soul,
              samba e pop em seu estilo musical único.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h5" color="green" gutterBottom>
              Trajetória Musical
            </Typography>
            <Typography>
              Liniker iniciou sua carreira com a banda{" "}
              <strong>Liniker e os Caramelows</strong>, lançando álbuns como{" "}
              <em>Remonta</em> (2016) e <em>Goela Abaixo</em> (2019). Em sua
              carreira solo, destacou-se com o álbum{" "}
              <em>Índigo Borboleta Anil</em> (2021), vencedor do Grammy Latino.
            </Typography>
            <Typography>
              Em 2024, lançou o álbum <em>Caju</em>, que traz participações de
              grandes nomes como Lulu Santos e Pabllo Vittar, explorando temas
              pessoais com uma fusão de estilos musicais.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h5" color="green" gutterBottom>
              Representatividade e Impacto
            </Typography>
            <Typography>
              Além da música, Liniker é uma referência na luta pela{" "}
              <strong>visibilidade LGBTQIA+</strong> e pela desconstrução de
              estereótipos de gênero. Sua presença e arte promovem debates
              importantes sobre diversidade e inclusão.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" color="green" gutterBottom>
              Conquistas Recentes
            </Typography>
            <Typography>
              Liniker foi indicada em 11 categorias no Prêmio Multishow 2024,
              destacando-se com músicas como <em>Deixa Estar</em> e{" "}
              <em>Veludo Marrom</em>. Sua atuação na série{" "}
              <em>Manhãs de Setembro</em> também reforça seu talento
              multifacetado.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Rodapé */}
      <Box
        sx={{
          bgcolor: "#333",
          color: "white",
          textAlign: "center",
          padding: "10px 0",
          marginTop: "20px",
        }}
      >
        <Typography variant="body2">
          &copy; 2024 Projeto NPV. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Yliniker