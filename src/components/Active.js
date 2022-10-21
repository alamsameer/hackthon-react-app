import {Box,Typography} from '@mui/material'

export default function Active() {
  return (
    <Box
    sx={{
        width:"fit-content",
        backgroundColor:"#cf5151"

    }}

    >
        <Typography sx={{color:"green"}}>Active</Typography>
    </Box>
  )
}
