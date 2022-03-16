import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

}));
const HomePage = () => {
    const classes = useStyles();

    return (

    
        <div className='mx-auto'>
          <Container>
                  <Grid container  justifyContent="center"
    spacing={3}>
                  <Grid item xs={12} sm={6} >

        <Box boxShadow={3} height="100%" >
             <List className={classes.root}>
      <ListItem>
       
        
<Typography >New Customer</Typography>
<Button href="#text-buttons">View All</Button>

      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Abu Bin Ishtiyak" secondary="info@softnio.com" />
        {/* <Divider variant="inset" component="li" /> */}

      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sharon Walker" secondary="sharon-90@example.com" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gloria Oliver" secondary="gloria_72@example.com" />
      </ListItem>
    </List> <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phillip Sullivan" secondary="phillip-85@example.com" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tasnim Ifrat" secondary="tasif-85@example.com" />
      </ListItem>
      
     
    </List>
        </Box>
</Grid>
<Grid item xs={12} sm={6}>

<Box boxShadow={3} height="100%">
    
<List className={classes.root}>

<ListItem>
       
        
       <Typography >Recent Activities</Typography>
       <Button href="#text-buttons">Cancel</Button>
       <Button href="#text-buttons">All</Button>
       
             </ListItem>
<ListItem>
<ListItemAvatar>
<Avatar>
<ImageIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Keith Jensen requested for room." secondary="2 hours ago" />
</ListItem>
<Divider variant="inset" component="li" />
<ListItem>
<ListItemAvatar>
<Avatar>
<WorkIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Harry Simpson placed a Order." secondary="2 hours ago" />
</ListItem>
<Divider variant="inset" component="li" />
<ListItem>
<ListItemAvatar>
<Avatar>
<BeachAccessIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Stephanie Marshall cancelled booking." secondary="2 hours ago" />
</ListItem>
</List> <List className={classes.root}>
<ListItem>
<ListItemAvatar>
<Avatar>
<ImageIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Nicholas Carr confirmed booking." secondary="2 hours ago" />
</ListItem>
<Divider variant="inset" component="li" />
<ListItem>
<ListItemAvatar>
<Avatar>
<WorkIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Timothy Moreno placed a Order." secondary="2 hours ago" />
</ListItem>


</List>
</Box>
</Grid>
</Grid>
</Container>
</div>
    );
};

export default HomePage;