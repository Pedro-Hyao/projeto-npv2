import { Box, Button } from '@mui/material'


function Footer() {


  return (
    <Box
      bgcolor="white"
      height="36%"
      width="100%px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="black"
      fontSize="10px">
        
      
      <Box
       display="flex"
       flexDirection="row">
      <Button variant='text' color='' href="./doom.html" > Todos os Direitos Reservados</Button>


      
        </Box> 
        <img width="100%" height="100%"
         src="https://i.ibb.co/zmJMTwx/Patrocinadores.png" alt="" />
    </Box>
  )
}

export default Footer
