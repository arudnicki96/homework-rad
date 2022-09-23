import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {Dispatch, SetStateAction} from "react";

type RangeSlider = {
    value: number[];
    setValue: Dispatch<SetStateAction<number[]>>
}

const RangeSlider = (props: RangeSlider): JSX.Element => {
const {value, setValue} = props;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
            />
        </Box>
    );
}
export default RangeSlider