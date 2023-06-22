import { ChangeEvent } from "react";
import SliderComponent from "../Slider/SliderComponent";
import { dataProps } from "../../types";

interface SlidersProps {
  sliderData: dataProps
  setSliderData: (sliderData: dataProps) => void
}

const Sliders = ({sliderData, setSliderData}: SlidersProps) => {

  const bankLimit: number | number[] = 10000 

  return (
    <div>
      <SliderComponent 
        min={100} 
        max={bankLimit} 
        defaultValue={sliderData.homeValue} 
        step={100} 
        label={"Home Value"}
        unit={"$"}
        value={sliderData.homeValue}
        onChange={(event: Event, value: number | number[], activeThumb: number ) => {
          setSliderData({
            ...sliderData, 
            homeValue: (value as number),
            downPayment: (value  as number * 0.2),
            loanAmount: (value as number * 0.8)
          })
        }}
        amount={sliderData.homeValue}

      />
      <SliderComponent 
        min={0} 
        max={sliderData.homeValue} 
        defaultValue={sliderData.downPayment} 
        step={100} 
        label={"Down Payment"}
        unit={"$"}
        value={sliderData.downPayment}
        onChange={(event: Event, value: number | number[], activeThumb: number) => {
          setSliderData({
            ...sliderData, 
            downPayment: value as number,
            loanAmount: sliderData.homeValue - (value as number)

          })
        }}
        amount={sliderData.downPayment}
      />
      <SliderComponent 
        min={0} 
        max={sliderData.homeValue} 
        defaultValue={sliderData.loanAmount} 
        step={100} 
        label={"Loan Amount"}
        unit={"$"}
        value={sliderData.loanAmount}
        // type assertion
        onChange={(event: Event, value: number | number[], activeThumb: number) => {
          setSliderData({
            ...sliderData, 
            loanAmount: value as number,
            downPayment: sliderData.homeValue - (value as number)
          })
        }}
        amount={sliderData.loanAmount}
      />
      <SliderComponent 
        min={2} 
        max={12} 
        defaultValue={sliderData.interestRate} 
        step={0.25} 
        label={"Interest Rate"}
        unit={"%"}
        value={sliderData.interestRate}
        onChange={(event: Event, value: number | number[]) => {
          setSliderData({...sliderData, interestRate: value as number})
        }}
        amount={sliderData.interestRate}
      />
      {/* <SliderComponent min={50} max={5000} defaultValue={2500} step={100} /> */}
    </div>
  );
};

export default Sliders;
