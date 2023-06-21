import { ChangeEvent } from "react";
import SliderComponent from "../Slider/SliderComponent";

const Sliders = () => {

  // const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
  //   if (typeof value === 'number') {
  //     // Access the 'value' property
  //     const sliderValue = value;
  //     console.log(sliderValue);
  //   }
  // }
  return (
    <div>
      <SliderComponent 
        min={0} 
        max={1000} 
        defaultValue={50} 
        step={50} 
        
        // onChange={handleChange}

      />
      <SliderComponent 
        min={0} 
        max={1000} 
        defaultValue={50} 
        step={50} 
      />
      <SliderComponent 
        min={200} 
        max={1000} 
        defaultValue={400} 
        // value={9}
        step={50} 
        // onChange={(e: any) => {console.log(e.target.value)}}
      />
      {/* <SliderComponent min={50} max={5000} defaultValue={2500} step={100} /> */}
    </div>
  );
};

export default Sliders;
