import React from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Stack,TextField,FormLabel} from "@mui/material"

export default function StartDate({selectedStartDate,setStartDate,handlestartDate}) {
  return (
    <Stack spacing={3} sx={{maxWidth: '450px'}}>
    <FormLabel>Start Date</FormLabel>
    <DesktopDatePicker
      name='startDate'
      value={selectedStartDate}
      inputFormat="MM/DD/YYYY"
      onChange={(newValue)=>{
        setStartDate(newValue.$d)
        handlestartDate(newValue)
    }}
      renderInput={(params) => <TextField {...params} />}
    />
    </Stack>
  )
}
