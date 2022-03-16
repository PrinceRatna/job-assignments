import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashChart from './DashChart/DashChart';
import { Container, Grid } from '@material-ui/core';









const useStyles = makeStyles({
  
   root1: {
    // maxWidth:'530px'
    width:'95%'
    
    // backgroundColor:'red'
   },
   root: {
    width:'95%'
   },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: '2px',
    paddingBottom:'2px',
    margin:'0px'

  },

});



const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 }]

const Dahboard = () => {

    
 
  



    const classes = useStyles();
    // const classes1 = useStyles1();
    return (
      <Container>
<div style={{marginButtom:'50px', marginLeft:'2%'}}>
        <Typography variant="h5" component="h2" marginBottom='20px'>Dashboard Overview</Typography>
        <Typography variant="h5" component="h2"  >Welcome to Dashboard Template.</Typography>
      
        </div>     

<div  style={{marginTop:'50px'}}>

        <Grid container justifyContent='center' alignItems='center'     spacing={1}>
           
 <Grid container item xs={12} sm={12} md={4} spacing={3}>
<div className={classes.root} >
  <Card className={classes.root1} variant="outlined">
      <CardContent>
  <Typography variant="h5" component="h2">
        Total Booking
        </Typography>
        <Typography variant="h5" component="h2">
        11,230
        </Typography>
        
        <div>
        <Typography className={classes.pos} color="textSecondary">
          THIS MONTH
        </Typography>
        <Typography variant="body2" component="p">
          1913
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          THIS WEEk
        </Typography>
        <Typography variant="body2" component="p">
          1125
        </Typography>
       <DashChart></DashChart>
       </div>
  </CardContent>
  </Card>
  </div>
  </Grid>


  <Grid container item xs={12} sm={12} md={4} spacing={3}>
<div className={classes.root} >
  <Card className={classes.root1} variant="outlined">
      <CardContent>
  <Typography variant="h5" component="h2">
        Total Booking
        </Typography>
        <Typography variant="h5" component="h2">
        11,230
        </Typography>
        
        <div>
        <Typography className={classes.pos} color="textSecondary">
          THIS MONTH
        </Typography>
        <Typography variant="body2" component="p">
          1913
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          THIS WEEk
        </Typography>
        <Typography variant="body2" component="p">
          1125
        </Typography>
       <DashChart></DashChart>
       </div>
  </CardContent>
  </Card>
  </div>
  </Grid>

  <Grid container item xs={12} sm={12} md={4}  spacing={3}>
<div className={classes.root} >
  <Card className={classes.root1} variant="outlined">
      <CardContent>
  <Typography variant="h5" component="h2">
        Total Booking
        </Typography>
        <Typography variant="h5" component="h2">
        11,230
        </Typography>
    
        <Typography className={classes.pos} color="textSecondary">
          THIS MONTH
        </Typography>
        <Typography variant="body2" component="p">
          1913
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          THIS WEEk
        </Typography>
        <Typography variant="body2" component="p">
          1125
        </Typography>
       <DashChart></DashChart>

      </CardContent>
    
    </Card>
    </div>
    </Grid>

    

    </Grid>
    </div>

    </Container>

    );
};

export default Dahboard;