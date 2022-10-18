import { useContext, useState } from "react";
import { Button, Container, Typography } from "@mui/material"
import Navbar from "../components/Navbar"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ChallengeName from "../components/ChallengeForm/ChallengeName";
import StartDate from "../components/ChallengeForm/StartDate";
import EndDate from "../components/ChallengeForm/EndDate";
import Description from "../components/ChallengeForm/Description";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LevelType from "../components/ChallengeForm/LevelType";
import UpdateImg from "../components/ChallengeForm/UpdateImg";
import ImageUpload from "../components/ChallengeForm/ImageUpload";
import localStorageContext from "../context/LocalStorage";
export default function ChallengeDetail() {
  const [inputs, setInputs] = useState({})
  const [selectedStartDate, setStartDate] = useState()
  const [selectedEndDate, setEndDate] = useState()
  const [src, setSrc] = useState("")
  const { getFromls } = useContext(localStorageContext)
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    getFromls(inputs)
  }

  const handlestartDate = (newValue) => {
    setInputs(values => ({ ...values, "startDate": newValue }))
    // console.log(selectedStartDate.getFullYear(), selectedStartDate.getMonth(), selectedStartDate.toJSON(), selectedStartDate.getDay(), selectedStartDate.getDate());
    
  }
  const handleEndtDate = (newValue) => {
    setInputs(values => ({ ...values, "EndDate": newValue }))
  }
  const handleUpload = async (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      let data = reader.result;
      setSrc(data)
      setInputs(values => ({ ...values, "img": data }))
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="create-challenge">
      {/* <Navbar /> */}
      <div>
        <Container maxWidth="false" sx={{ bgcolor: '#cfe8fc', padding: "1rem", }} >
          <Typography
            variant="h5"
          >
            Challenge Detail
          </Typography>
        </Container>
      </div>
      <form className="create-challenge-form">
        <ChallengeName inputs={inputs} handleChange={handleChange} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StartDate setStartDate={setStartDate} selectedStartDate={selectedStartDate} handlestartDate={handlestartDate} />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <EndDate selectedEndDate={selectedEndDate} setEndDate={setEndDate} handleEndtDate={handleEndtDate} />
        </LocalizationProvider>
        < Description inputs={inputs} handleChange={handleChange} />
        {
          src ? <UpdateImg handleUpload={handleUpload} src={src} /> : <ImageUpload handleUpload={handleUpload} />
        }
        <LevelType inputs={inputs} handleChange={handleChange} />
        <div>
          <Button variant="contained" onClick={handleSubmit} color="success" size="large" >Submit</Button>
        </div>
      </form>
    </div>
  )
}
