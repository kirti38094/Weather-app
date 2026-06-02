import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1566056196575-62183907f1ad?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const HOT_URL ="https://plus.unsplash.com/premium_photo-1711662177249-138d96f8c4d6?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const COLD_URL ="https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const RAIN_URL="https://images.unsplash.com/photo-1727376530387-8cccb762ce4f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
    <div className="infoBox">
      <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ?RAIN_URL
           : info.temp >15 
           ? HOT_URL 
           :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
          ?< ThunderstormIcon/>
           : info.temp >15 
           ? <SunnyIcon/>
           : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
             <p>The weather can be described as <i>{info.weather}</i> and  feels like = {info.feelsLike}&deg;C</p>
              
        </Typography>
      </CardContent>
  
    </Card>
    </div>
    </div>
    );
}