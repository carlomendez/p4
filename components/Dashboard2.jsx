"use client";

import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GraphCard5 from './GraphCards5';
import GraphCard6 from './GraphCards6';
import Table1 from './Table1';
import GraphCard7 from './GraphCards7';

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

const PostCardList1 = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
        <div className='prompt_card'><p className='text-center'>Received</p>        
          <h1 className="text-3xl text-center">
              85
              <br className="max-md:hidden"/>
          </h1>
        </div>
        <div className='prompt_card'><p className='text-center'>Completed</p>
          <h1 className="text-3xl text-center">
              190
              <br className="max-md:hidden"/>
          </h1>
        </div>
        <div className='prompt_card'><p className='text-center'>Authorised</p>
          <h1 className="text-3xl text-center">
              263
              <br className="max-md:hidden"/>
          </h1>
        </div>
    </div>
  )
}

const PostCardList2 = ({data, handleTagClick}) => {
    return (
      <div className='mt-16 prompt_layout'>
        <GraphCard5/>
        <GraphCard6/>
        <GraphCard7/>
      </div>
    )
  }
const PostCardList3 = () => {
    return (
          <Table1 />
    )
  }

const Dashboard2 = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (e) => {

  }

  const fetchPosts = async () => {
    const response = await fetch("api/post");
    const data = await response.json();
    setPosts(data);
  }
  useEffect(() => {

    fetchPosts();
  }, []);
  console.log(JSON.stringify(posts));

  return (
    <Box
        component="form"
        noValidate
        autoComplete="off"
    >
    <section className=''>
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
            <div className='text-2xl font-bold col-span-3 border-r-2'>Sample Status</div>
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
        <div className='w-full flex-center flex-col font-bold mt-8'><span className='text-center'><p className='text-center'>This Month's Samples</p></span></div>
      <PostCardList1 
        data={posts}
        handleTagClick={() => {}}
      />
      <PostCardList2 
        data={posts}
        handleTagClick={() => {}}
      />
      {/* <div className='inline-flex items-center justify-between w-full'><span><p>Data Table (top 1000)</p></span> <Button>Export</Button></div>
      <PostCardList3/> */}
    </section>
    </Box>
  )
}

export default Dashboard2