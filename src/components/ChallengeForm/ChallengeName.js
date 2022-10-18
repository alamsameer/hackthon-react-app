import {  FormControl, FormLabel, TextField} from "@mui/material"

export default function ChallengeName({inputs,handleChange}) {
    return (
        <FormControl  sx={{maxWidth: '450px'}}>
            <FormLabel>Label</FormLabel>
            <TextField id="ChallengeName"
             name="challengeName" variant="outlined" 
             value={inputs.challengeName || ""} 
             onChange={handleChange} />
        </FormControl>
    )
}
