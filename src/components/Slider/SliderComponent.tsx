import { Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { ChangeEvent } from "react";
import { useState } from "react";

interface SliderComponentProps {
  max: number;
  min: number;
  defaultValue: number;
  step: number;
  // value: number
  // onChange: (e: Event) => void
}

const SliderComponent = ({
  min,
  max,
  defaultValue,
  step,
}: SliderComponentProps) => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      // Access the 'value' property
      const sliderValue = value;
      setSliderValue(value);
      console.log(sliderValue);
    }
  };
  return (
    <>
      <Stack gap={2}>
        <Typography variant="subtitle2">Home Value</Typography>
        <Typography variant="h5"> ${sliderValue} </Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        // value={value}
        marks
        onChange={handleChange}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack gap={2}>
        <Typography> $1000 </Typography>
        <Typography> $10000 </Typography>
      </Stack>
    </>
  );
};

export default SliderComponent;
