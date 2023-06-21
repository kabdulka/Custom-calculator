import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sliders from "./components/Sliders/Sliders";
import TenureSelect from "./components/TenureSelect/TenureSelect";
import Result from "./components/Result/Result";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container 
        maxWidth="xl"
        sx={{
            marginTop: 4,

        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}> 
            Item 
            <Sliders />
            <TenureSelect />
          </Grid>
          {/* xs small: screen md: medium screen */}
          <Grid item xs={12} md={6}> 
            Item 
           
          </Grid>

        </Grid>
      </Container>
      {/* <Result /> */}
    </div>
  );
}

export default App;
