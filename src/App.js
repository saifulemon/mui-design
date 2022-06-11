import { Grid } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Navbar></Navbar>
      </Grid>
    </div>
  );
}

export default App;
