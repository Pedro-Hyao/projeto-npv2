import { Box, Button } from '@mui/material'

import { useState } from 'react';


function Header() {
  const [color, setColor] = useState("white");



  const handleMouseOver = () => {
    setColor('#eeeeee')
  };
  const handleMouseOut = () => {
    setColor('white')
  };
  return (
    <Box
      style={{ background: color, transition: 'background 1,8s ease' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      bgcolor="white"
      height="15%"
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      color="black"

    >

      <img width="130px" height="130px" src="https://i.ibb.co/mDtdZpx/projeto-NPV-logo.png" alt="" />
      <Box
        fontStyle="italic"
        >
        <b>Projeto NPV: música na cultura.</b></Box>

      <Box
        width="130px" height="130px"
        bgcolor=""
        display="flex"
        flexWrap="wrap">


      </Box>


      <Box
        display="flex"
        justifyContent="center"
        alignItems="end"
        flexWrap="wrap"
        weight="50%"
        backgroundColor="white"
      >
        <Box>
          <a href='login.html'>
            <Button variant="inherit" color=""> Entrar </Button>
          </a>


        </Box>

      </Box>



    </Box>

  )
}

export default Header
