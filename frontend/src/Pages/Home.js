import Navbar from './Components/Navbar.js';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
      <>
        <div style={{
          backgroundColor: 'rgba(135, 206, 250, 0.4)',
          height: "100vh"
        }}>
        
          <Navbar />
          
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Lancer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Welcome to Lancer! '}
            {'This is a website where you can upload projects and get people to help you with them as well as help other people ' + 
            'with their projects.'}
          </Typography>
        </Container>
        
        </div>
      </>
    );
  }
  export default Home