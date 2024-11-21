import React from "react";
import { Box, Typography, Button } from "@mui/material";

const MusicosInterioranos = () => {
  const artistas = [
    {
      nome: "Liniker",
      descricao: "Artista premiada, representando soul e MPB com representatividade e impacto cultural.",
    },
    {
      nome: "Jão",
      descricao: "Cantor pop de Américo Brasiliense, conhecido por hits que exploram amor e melancolia.",
    },
    {
      nome: "Morgana Kurmann",
      descricao: "Compositora que mistura pop, rock, blues e jazz, trazendo sofisticação musical.",
    },
    {
      nome: "Cleber Fogaça",
      descricao: "Músico e educador de São Carlos, mistura estilos tradicionais brasileiros com contemporâneos.",
    },
    {
      nome: "Paulo Martelli",
      descricao: "Violonista de São Carlos, especialista em violão clássico e contemporâneo.",
    },
    {
      nome: "Carrapicho Rangel",
      descricao: "Multi-instrumentista e bandolinista de Araraquara, renomado no cenário instrumental brasileiro.",
    },
  ];

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      {/* Introdução */}
      <Box sx={{ marginBottom: "20px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px" }}>
        <Typography variant="h4" gutterBottom>
          A Importância dos Cantores Interioranos na Cultura
        </Typography>
        <Typography variant="body1">
          Músicos vindos do interior do Brasil, como Araraquara, Américo Brasiliense e São Carlos, 
          têm contribuído significativamente para enriquecer a diversidade cultural do país. 
          Eles trazem perspectivas únicas e criam conexões entre as raízes regionais e o cenário nacional.
        </Typography>
      </Box>

      {/* Botões dos Cantores */}
      <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
        {artistas.map((artista, index) => (
          <Box
            key={index}
            sx={{
              width: "250px",
              padding: "15px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              {artista.nome}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "15px" }}>
              {artista.descricao}
            </Typography>
            <Button variant="contained" color="primary">
              Saiba Mais
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MusicosInterioranos;
