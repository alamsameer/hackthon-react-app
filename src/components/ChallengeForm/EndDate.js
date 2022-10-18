import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Stack,TextField,FormLabel} from "@mui/material"

export default function EndDate({selectedEndDate,setEndDate,handleEndtDate}) {
  return (
    <Stack spacing={3} sx={{maxWidth: '450px'}}>
        <FormLabel>End Date</FormLabel>
    <DesktopDatePicker
      inputFormat="MM/DD/YYYY"
      name='endDate'
      value={selectedEndDate} 
      onChange={
        (newValue)=>{
            setEndDate(newValue)
            handleEndtDate(newValue)
        }
      }
      renderInput={(params) => <TextField {...params} />}
    />
    </Stack>
  )
}
