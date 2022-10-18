import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function ImageUpload({handleUpload}) {
  return (
    <div>
          <label class="custom-file-upload">
            <input type="file" onChange={handleUpload} />
            Custom Upload
            <CloudUploadIcon />
          </label>
        </div>
  )
}
