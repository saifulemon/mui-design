import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Newspaper from './components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Navbar></Navbar>
      </Grid>
      <Container>
        <Newspaper></Newspaper>
      </Container>
    </div>
  );
}

export default App;
