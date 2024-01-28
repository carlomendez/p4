"use client"

import Dashboard1 from "@components/Dashboard1";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import Dashboard2 from "@components/Dashboard2";
import Box from '@mui/material/Box';

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

const Dashboard = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
          <Box>
            <>
              <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Home" {...a11yProps(0)} />
                  <Tab label="Last 30 Days" {...a11yProps(1)} />
                  <Tab label="Sample Status" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <section className="flex-center flex-col">
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
                <section className="flex-center flex-col">
                      <Dashboard1 />
                </section>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <section className="flex-center flex-col">
                  <Dashboard2 />
                </section>
              </CustomTabPanel>
            </>  
          </Box>
  )
}

export default Dashboard;