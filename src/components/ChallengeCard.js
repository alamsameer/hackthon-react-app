import { Box, CardActionArea, CardMedia, Card, Typography, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import img1 from "../assets/cardimage/Group 1000002466.png"

export default function ChallengeCard({ challenge }) {
  const { challengeName, EndDate, description, img, level, startDate } = challenge
  const [currstatus,setStatus]=useState("")
  const[timeLeft,setTimeLeft]=useState({})
  const countDown = () => {
    var startingDate = new Date(startDate); 
    var startms = startingDate.getTime();
    var currTime= new Date()
    var currms=currTime.getTime()
    var endDate=new Date(EndDate)
    var endms=endDate.getTime()
    if(currms<startms){
      // upcoming
      setStatus("upcoming")
     let time= gettime(currms,startms)
     return time
    }
    else if(startms<currms && currms<endms){
      // active
      
      setStatus("Active")
      let time =gettime(currms,endms)
      return time 
    }
    else{
      // past
      setStatus("past")
      return EndDate
    }
  }
  const gettime=(start,end)=>{
    let ms=end-start
    let days=Math.floor(ms/(24*60*60*1000));
    let daysms=Math.floor(ms%(24*60*60*1000));
    let hours=Math.floor(daysms/(60*60*1000));
    let hoursms=Math.floor(ms%(60*60*1000));
    let minutes=Math.floor(hoursms/(60*1000));
    let minutesms=ms%(60*1000);
    let sec=Math.floor(minutesms/1000);
    let ltimeLeft={days,hours,minutes,sec}
    return ltimeLeft
  }
  

  useEffect(()=>{
    const timer=setInterval(()=>{
      setTimeLeft(countDown())
    },1000)
    return ()=>clearTimeout(timer)
  },[])
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img || img1}
          alt="green iguana"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ backgroundColor: "green", padding: "5px", color: "white", fontSize: "10px", borderRadius: "20%", opacity: 0.5 }}>
              {currstatus ||"active"}
            </Typography>
          </Box>
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "center" }}>
            {challengeName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            DAYS {timeLeft.days} : HOURS {timeLeft.hours} : MINUTES {timeLeft.minutes} : SEC {timeLeft.sec}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
