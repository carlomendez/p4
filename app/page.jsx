"use client";
import Dashboard1 from "@components/Dashboard1";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Dashboard2 from "@components/Dashboard2";
import MapPage from "@components/Map";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FeatureFeed from "@components/FeatureFeed";
import NewsFeed from "@components/NewsFeed";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Main = () => {
  const {data: session} = useSession();
  const [province, setProvince] = useState('');

  const handleprovinceChange = (event) => {
    setProvince(event.target.value);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
      (async () => {
        const res = await getProviders();
        setProviders(res);
      })();
  }, []);
  
  return (
    <Box>
    {session?.user ?  (  
    <>
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Last 30 Days" {...a11yProps(1)} />
        <Tab label="Sample Status" {...a11yProps(2)} />
        <Tab label="News" {...a11yProps(3)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            NICER CAVES
            <br className="max-md:hidden"/>
        </h1>
        <h2 className="text-2xl font-extrabold">    
            <span className="text-center">NICER Program: Center for Assessment Cave Ecosystem (CAVE) in CALABARZON</span>
        </h2>
    </section>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
    <section className="w-full flex-center flex-col">
          <Dashboard1 />
    </section>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      <section className="w-full flex-center flex-col">
        <Dashboard2 />
      </section>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={4}>
      <section className="w-full">
          <h1 className="text-2xl text-left mt-6">
              Features
              <br className="max-md:hidden"/>
          </h1>   
          <FeatureFeed />
      </section>
      <section className="w-full">
          <h1 className="text-2xl text-left mt-6">
              News Releases
              <br className="max-md:hidden"/>
          </h1>   
          <NewsFeed />
      </section>
    </CustomTabPanel>
    </>  
    ) : (
      <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
          NICER CAVES
          <br className="max-md:hidden"/>
      </h1>
      <h2 className="text-2xl font-extrabold">    
          <span className="text-center">NICER Program: Center for Assessment Cave Ecosystem (CAVE) in CALABARZON</span>
      </h2>
  </section>
    )}
  </Box>

    // <section className="w-full flex-center flex-col">
    //     <h1 className="head_text text-center">
    //         NICER CAVES
    //         <br className="max-md:hidden"/>
    //     </h1>
    //     <h2 className="text-2xl font-extrabold">    
    //         <span className="text-center">NICER Program: Center for Assessment CaVe Ecosystem (CAVE) in CALABARZON</span>
    //     </h2>
  
    //     {session?.user ?  (
    //       <Dashboard />
    //     ) : (
    //       <p className="desc text-center">
    //         Welcome
    //       </p> 
    //     ) } 
        
    // </section>
  )
}

export default Main;