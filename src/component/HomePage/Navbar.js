import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Badge, MenuItem } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  prince:{
     display:'inlineBlock',
     marginLeft:'auto',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));




const Navbar = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';







  const renderMobileMenu = (
     <Menu
       anchorEl={mobileMoreAnchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       id={mobileMenuId}
       keepMounted
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       open={isMobileMenuOpen}
       onClose={handleMobileMenuClose}
     >
     <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
         <Typography>Messsages</Typography>
      </MenuItem> 
     <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography> Notifications</Typography>
       
      </MenuItem> 
       <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Typography>Profile</Typography>
        
      </MenuItem> 
     </Menu>
  );





  <MenuItem onClick={handleProfileMenuOpen}>
  <IconButton
    aria-label="account of current user"
    aria-controls="primary-search-account-menu"
    aria-haspopup="true"
    color="inherit"
  >
    <AccountCircle />
  </IconButton>
  <Typography>Profile</Typography>

  
</MenuItem>


// ****************************************

const [anchorElp, setAnchorElp] = React.useState(null);

const handleClick = (event) => {
  setAnchorElp(event.currentTarget);
};

const handleClose = () => {
  setAnchorElp(null);
};






// ****************************************




    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              dashlite
            </Typography>








       <Toolbar  className={classes.prince}> 

       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
               {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}

       <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography variant="h6" color="inherit">Profile</Typography>
          </MenuItem>







       
            {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography variant="h6" color="inherit">Notifications</Typography>
        
      </MenuItem> */}
      {/* ********************************* */}


      {/* <div> */}
      {/* <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
        // color="primary"
        onClick={handleClick}
      > */}
        

        <MenuItem aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
        // color="primary"
        onClick={handleClick}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography variant="h6" color="inherit">Notifications</Typography>
        
      </MenuItem>




      {/* </Button> */}
      <StyledMenu
        id="customized-menu"
        anchorElp={anchorElp}
        keepMounted
        open={Boolean(anchorElp)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            < SendIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText   primary="Sent mail" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon >
            <SendIcon   fontSize="small" />
          </ListItemIcon> 
          <ListItemText primary="Drafts" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem> 

       </StyledMenu>
   




     
  
       </Toolbar>   
        


      


          </Toolbar>

           
     {renderMobileMenu}
      {renderMenu}  

  
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['CRM Panel', 'Hotel Management', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List>
            {['Default Dashboard', 'Crypto Dashboard', 'Analytics Dashboard','Invest Dashboard'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

        {/* <Divider> */}

        <List>
            {['Projects', 'User Manage', 'AML/KYCs','Transactions','Applications','Invoice','Products','Pricing Table','Image Gallery'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

        {/* </Divider> */}

        <List>
            {['Auth Pages', 'Error Pages', 'Other Pages'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider/> */}

          <List>
            {['Ui Elements', 'Crafted Icons', 'Icon Libraries','Tables','Forms', 'Charts','Widgets','Miscellaneous','Email Template'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          
        </main>

        </div>
        
    );
};

export default Navbar;