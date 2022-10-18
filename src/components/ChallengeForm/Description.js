import { FormControl,FormLabel} from "@mui/material";
import Textarea from '@mui/joy/Textarea';

export default function Description({inputs,handleChange}) {
  return (
    <FormControl>
      <FormLabel>Description</FormLabel>
      <Textarea minRows={10}
       name="description"  sx={{ maxWidth: 650 }} value={inputs.description || ""} placeholder="Describe your project"onChange={handleChange}/>
   </FormControl>
  );
}