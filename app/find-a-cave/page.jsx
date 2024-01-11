"use client";

import MapPage from "@components/Map";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";

const FindCave = () => {
  
  const [province, setProvince] = useState('');
  const handleprovinceChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <section className="w-full">
      <h1 className="text-left text-xl font-bold mb-2">
          Find a Cave
          <br className="max-md:hidden"/>
      </h1>
      <h2 className="text-l font-bold mb-10">    
          <span className="text-center">Select a Province to to find a Cave</span>
      </h2>
      <Box className='mb-10'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            size='small'
            id="demo-simple-select"
            value={province}
            label="Province"
            onChange={handleprovinceChange}
          >
            <MenuItem value={'Cavite'}>Cavite</MenuItem>
            <MenuItem value={'Laguna'}>Laguna</MenuItem>
            <MenuItem value={'Batangas'}>Batangas</MenuItem>
            <MenuItem value={'Rizal'}>Rizal</MenuItem>
            <MenuItem value={'Quezon'}>Quezon</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <MapPage/>
    </section>  
  )
}

export default FindCave;