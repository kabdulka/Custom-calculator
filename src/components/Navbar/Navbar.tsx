import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="xl">

            <Toolbar variant="dense">
    
                <Typography 
                    variant="h6" 
                    color="inherit" 
                    component="div"
                    // sx={{color: "white"}}
                >
                    Mortgage Calculator 
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar
