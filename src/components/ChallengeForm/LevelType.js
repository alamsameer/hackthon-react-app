import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/material';

export default function ({inputs,handleChange}) {
  return (
    <FormControl sx={{maxWidth:"450px"}}>
  <FormLabel>Level</FormLabel>

  <Select
    labelId="level"
    id="
    level"
    value={inputs.level || ''}
    label="level"
    name="level"
    onChange={handleChange}
  >
    <MenuItem value="Easy">Easy</MenuItem>
    <MenuItem value="Medium">Medium</MenuItem>
    <MenuItem value="Hard">Hard</MenuItem>
  </Select>
</FormControl>
  )
}
