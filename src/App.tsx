import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sliders from "./components/Sliders/Sliders";
import TenureSelect from "./components/TenureSelect/TenureSelect";
import Result from "./components/Result/Result";
import { Container, Grid } from "@mui/material";
import { dataProps } from "./types";


function App() {

  const [sliderData, setSliderData] = useState<dataProps>({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  })

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
          <Grid item xs={12} md={6} gap={2}> 
            Item 
            <Sliders sliderData={sliderData} setSliderData={setSliderData}/>
            <TenureSelect 
              sliderData={sliderData}
              setSliderData={setSliderData}
            />
          </Grid>
          {/* xs small: screen md: medium screen */}
          <Grid item xs={12} md={6}> 
             
            <Result 
              sliderData={sliderData}
            />
           
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
