import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SliderSelect from "./components/SliderSelect/SliderSelect";
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
            display: "flex",
            justifyContent: "space-around"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}> 
            Item 
            <SliderSelect />
            <TenureSelect />
          </Grid>

          <Grid item xs={6}> 
            Item 
           
          </Grid>

        </Grid>
      </Container>
      {/* <Result /> */}
    </div>
  );
}

export default App;
