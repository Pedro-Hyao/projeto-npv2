import { Box} from '@mui/material'
import StandardImageList from './liststs'
import Rooterapp from './Rooterapp'



function Content() {


  return (
    <Box
      bgcolor="#f1f1f1"

      width="100%px"
      display="flex"
      alignItems="flex-start"
      justifyContent="space-around"
      flexWrap="wrap"
      color="black"

      flexDirection="row"
      fontSize="0.5rem"
    >


<Rooterapp />



      <Box
        height="95%"
        width="12%"
        bgcolor="green"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          height="98%"
          width="95%"
        >

          <StandardImageList></StandardImageList>
        </Box>
      </Box>
    </Box>
  )
}

export default Content