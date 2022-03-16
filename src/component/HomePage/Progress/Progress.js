import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Card, Container, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    pad:{
         padding:'50px',
         margin:'50px'
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
const Progress = () => {
    const classes = useStyles();
    return (
      
      <Container  style={{marginTop:'40px' ,marginLeft:'2%'}}>
      <div >
      <Box boxShadow={3} >
      <div style={{padding:'18px'}}>
        <div  className={classes.root}>
          <div style={{marginBottom:'20px'}}>
            <Typography variant="h5" component="h2">Top Selected Package</Typography>
            <Typography  color="textSecondary">In last 30 days top selected package</Typography>
            <br/>
          
          </div>
          <Typography>Strater Package</Typography>
            <BorderLinearProgress variant="determinate" value={60} />
            <br/>
            <Typography>Honeymoon Package</Typography>
            <BorderLinearProgress variant="determinate" value={50} />
            <br/>
            <Typography>Vacation Package</Typography>
            <BorderLinearProgress variant="determinate" value={40} />
            <br/>
            <Typography>Continental Package</Typography>
            <BorderLinearProgress variant="determinate" value={30} />
            <br/>
            <Typography>Spring Package</Typography>
            <BorderLinearProgress variant="determinate" value={20} />
            <br/>
            <Typography>All suite Package</Typography>
            <BorderLinearProgress variant="determinate" value={10} />
            </div>
        </div>
        </Box>
        </div>
        </Container>
        
    );
};

export default Progress;