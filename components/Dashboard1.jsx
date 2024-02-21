"use client";

import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GraphCard1 from './GraphCards1';
import GraphCard2 from './GraphCards2';
import GraphCard3 from './GraphCards3';
import GraphCard4 from './GraphCards4';

const filters = [
    {
      value: 'AAA',
      label: 'AAA',
    },
    {
      value: 'BBB',
      label: 'BBB',
    },
    {
      value: 'CCC',
      label: 'CCC',
    },
  ];

const PostCardList1 = () => {
  return (
    <div className='mt-16 prompt_layout'>
        <GraphCard1/>
        <GraphCard2/>
        <GraphCard3/>
    </div>
  )
}

const PostCardList2 = () => {
    return (
          <GraphCard4 />
    )
  }

const Dashboard1 = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (e) => {

  }

  return (
      <section>
        <div className='grid grid-cols-6 gap-3 border-b-2'>
            <div className='text-xl font-bold col-span-3 border-r-2'></div>
            <div className='text-center'>Filter 1</div>
            <div>
                <TextField
                    fullWidth
                    id="outlined-select-currency"
                    select
                    defaultValue="AAA"
                    size='small'
                    >
                    {filters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div><Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Settings</Button></div>
            <div className='text-2xl font-bold col-span-3 border-r-2'>Last 30 days received samples' processes</div>
            <div className='text-center'>Filter 2</div>
            <div>
                <TextField
                    fullWidth
                    id="outlined-select-currency"
                    select
                    defaultValue="AAA"
                    size='small'
                    >
                    {filters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div><Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Help</Button></div>
        </div>
      <PostCardList1 />
      <PostCardList2 />
      </section>
  )
}

export default Dashboard1