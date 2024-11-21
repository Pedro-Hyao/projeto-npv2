
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Rooternav = () => (

  <AppBar position="sticky" color="">
    <Box
      display="flex"
      justifyContent="flex-start"
      bgcolor="rgba(0, 150, 20, 0.9)"
    >
      <Toolbar>
        <Typography variant="inherit" style={{ flexGrow: 0 }}>

        </Typography>

        <Button color="" component={Link} to="/">Home</Button>

        <Button color="" component={Link} to="/sobre">sobre</Button>

        <Button color="" component={Link} to="/musicas"> Músicas </Button>

        <Button color="" component={Link} to="/cantores"> Cantores </Button>

        <Button color="" component={Link} to="/bandas"> Bandas </Button>

        <Button color="" component={Link} to="/estilos"> Estilos </Button>

      </Toolbar>
    </Box>
  </AppBar>

);

export default Rooternav;
