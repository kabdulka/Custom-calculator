
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
            //   'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return (

    <Stack>

        <Typography
            textAlign={"center"}
            variant="h5"
        >
            Monthly Payment: ${monthlyPayment.toFixed(2)}

            <Pie data={MortgageData}/>
        </Typography>
    </Stack>

  )
}

export default Result
