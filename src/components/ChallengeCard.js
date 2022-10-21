import { Box, CardActionArea, CardMedia, Card, Typography, CardContent } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Past from './Past';
import Active from './Active';
import Upcoming from './Upcoming'
import img1 from "../assets/cardimage/Group 1000002466.png"
import localStorageContext from '../context/LocalStorage';
export default function ChallengeCard({ challenge }) {
  const{dispatch}=useContext(localStorageContext )
  const { challengeName, EndDate, img, startDate } = challenge
  const [currstatus,setStatus]=useState("")
  const[timeLeft,setTimeLeft]=useState({})
  let tag;
  let endedOn=new Date (EndDate)
  
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
      dispatch({type:'addstatus',payload:{name:challengeName,status:"upcoming"}})
     let time= gettime(currms,startms)
     return time
    }
    else if(startms<currms && currms<endms){
      // active
      setStatus("active")
      dispatch({type:'addstatus',payload:{name:challengeName,status:"active"}})
      let time =gettime(currms,endms)
      return time 
    }
    else{
      // past
      dispatch({type:'addstatus',payload:{name:challengeName,status:"past"}})
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
  const checkStatus=()=>{
    if (currstatus === "active"){
      tag=<Active/>
    }
    else if (currstatus ==="upcoming"){
      tag=<Upcoming/>
    }
    else{
      tag=<Past/>
    }
  }
  checkStatus()
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
            {
              tag
            }
          </Box>
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "center" }}>
            {challengeName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {currstatus ==="past"?`Ended on${endedOn.toDateString()}` : `DAYS ${timeLeft.days} : HOURS ${timeLeft.hours} : MINUTES ${timeLeft.minutes} : SEC ${timeLeft.sec}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
