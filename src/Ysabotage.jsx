import { Box, Typography, Container } from "@mui/material";



function Ysabotage() {


  return (
  <Box sx={{ bgcolor: "#f4f4f4", minHeight: "100vh", padding: "20px" }}
  width="87%" height="100%">
    {/* Cabeçalho */}
    <Box sx={{ bgcolor: "#4CAF50", color: "white", padding: "20px 0" }}>
        <Container>
          <Typography variant="h4" align="center">
            PROJETO NPV: Sabotage
          </Typography>
          <Typography variant="subtitle1" align="center">
            Especial: Sabotage, A Voz da Periferia
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
              Quem foi Sabotage?
            </Typography>
            <Typography>
              Sabotage, nome artístico de Mauro Mateus dos Santos (1973-2003),
              foi um rapper e compositor que se destacou por sua habilidade
              lírica e pela denúncia das desigualdades sociais. Nascido na Zona
              Sul de São Paulo, enfrentou desafios como pobreza extrema e o
              envolvimento com o tráfico, mas encontrou na música uma forma de
              expressão e transformação.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h5" color="green" gutterBottom>
              Carreira Musical
            </Typography>
            <Typography>
              Com apoio de artistas como RZO e Racionais MC's, Sabotage lançou
              em 2000 o icônico álbum <em>Rap é Compromisso</em>, que se tornou
              um marco do rap nacional. Seu estilo misturava hip hop, samba e
              funk, destacando-se pelas letras profundas e críticas sociais.
            </Typography>
            <Typography>
              Ele também atuou no cinema, contribuindo com trilhas sonoras para
              filmes como <em>O Invasor</em> e <em>Carandiru</em>.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h5" color="green" gutterBottom>
              Legado e Homenagens
            </Typography>
            <Typography>
              Após sua morte precoce, Sabotage se tornou um ícone da cultura
              brasileira. Projetos como o álbum <em>Sabotage 50</em> e o Centro
              Cultural Sabotage mantêm sua memória viva. Ele segue sendo uma
              inspiração para novos artistas e comunidades periféricas.
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
          &copy; 2024 PROJETO NPV. Todos os direitos reservados.
        </Typography>
      </Box>
      </Box>
);
}

export default Ysabotage