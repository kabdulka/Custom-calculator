
import { Stack, Typography } from "@mui/material"
import { dataProps } from "../../types"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SlidersProps {
    sliderData: dataProps
    // setSliderData: (sliderData: dataProps) => void
  }

const Result = ({sliderData}: SlidersProps) => {
    
    const {loanAmount, downPayment, homeValue, loanTerm, interestRate} = sliderData
    console.log(typeof loanTerm)
    const months = loanTerm as number * 12
    const interestPerMonth = interestRate / 100 / 12

    const monthlyPayment = 
    (
        loanAmount *
        interestPerMonth *
        (1 + interestPerMonth) ** months) /
        ((1 + interestPerMonth) ** months - 1
    );
    
    const totalInterestGenerated = monthlyPayment * months - loanAmount;

 
    const MortgageData = {
        labels: ['principle', 'interest'],
        datasets: [
          {
            label: 'Ration of Principle and Interest',
            data: [homeValue, totalInterestGenerated],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
          
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
          
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return (

    <Stack gap={2}>

        <Typography
            textAlign={"center"}
            variant="h5"
        >
            Monthly Payment: ${monthlyPayment.toFixed(2)}
        </Typography>
        <Stack direction={"row"} justifyContent={"center"}>
            <div >
                <Pie data={MortgageData}/>

            </div>
        </Stack>
    </Stack>

  )
}

export default Result
