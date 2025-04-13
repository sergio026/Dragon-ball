import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardPersonaje=()=> {
    return (
    <Card sx={{ width: 345 }}>
        <CardMedia
        component="img"
        alt="green iguana"
        
        image="https://th.bing.com/th/id/R.1fad33dff494a8fcfac188efebfdc385?rik=77RMJPU%2bSyOIQA&pid=ImgRaw&r=0"
    />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default CardPersonaje;
