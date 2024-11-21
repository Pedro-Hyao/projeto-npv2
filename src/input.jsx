
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      noValidate
      justifyContent="center"
      autoComplete="off"
      height="100%"

    >
      <Input placeholder="email" inputProps={ariaLabel} />

      <Input placeholder="senha" inputProps={ariaLabel} />


    </Box>
  );
}