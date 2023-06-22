import { Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { ChangeEvent } from "react";
import { useState } from "react";

interface SliderComponentProps {
  max: number
  min: number 
  defaultValue: number | number[]
  step: number | null
  label: string
  onChange: (event: Event, value: number | number[], activeThumb: number ) => void
  value: number | number[]
  unit: string
  amount: number
  // value: number
  // onChange: (e: Event) => void
}

const SliderComponent = ({
  min,
  max,
  defaultValue,
  step,
  label,
  onChange,
  value,
  unit
}: SliderComponentProps) => {

//   const [sliderValue, setSliderValue] = useState<number>(0);

//   const handleChange = (event: Event, value: number | number[]) => {
//     if (typeof value === "number") {
//       // Access the 'value' property
//       const sliderValue = value;
//       setSliderValue(value);
//       console.log(sliderValue);
//     }
//   };

  return (
    <Stack my={1.4} gap={1}>
      <Stack gap={2}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5"> {unit}{value} </Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        value={value}
        marks
        onChange={onChange}
      />
      {/* Stack is like flexbox */}
      <Stack direction={"row"} justifyContent="space-between">
        {/* min */}
        <Typography variant="caption" color={"text.secondary"}> {unit}{min} </Typography>
        {/* max */}
        <Typography variant="caption" color={"text.secondary"}> {unit}{max} </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
