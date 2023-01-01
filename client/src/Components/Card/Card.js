import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const handleClick = ()=>{
    props.receiver(props.data.id)
  }
  return (
    <Card sx={{ minWidth: 275, minHeight: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.data.id}
        </Typography>
        <Typography variant="h5" component="div">
        {props?.data?.title}
        </Typography>
        <Typography variant="body2">
        {props?.data?.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={handleClick}>comments</Button>
      </CardActions>
    </Card>
  );
}