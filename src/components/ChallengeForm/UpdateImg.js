import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Box} from  "@mui/material"
export default function updateImg({src,handleUpload}) {
  return (
    <div >
    <Box
        component="img"
        sx={{
          height: 150,
          width: 200,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          display:"block"
        }}
        alt="The house from the offer."
        src={src}
      />
    <label class="custom-update-img">
      <input type="file" onChange={handleUpload} />
      update Image
    </label>
  </div>
  )
}
