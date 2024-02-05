"use client"

import Dashboard1 from "@components/Dashboard1";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import Dashboard2 from "@components/Dashboard2";
import Box from '@mui/material/Box';
// import InformationContainer from "@components/InformationContainer";

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

const RecordDashboard = ({ first, second, third }) => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
          <Box>
            <>
              <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Information" {...a11yProps(0)} />
                  <Tab label="Taxonomy" {...a11yProps(1)} />
                  <Tab label="References" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {first}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {second}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {third}
              </CustomTabPanel>
            </>  
          </Box>
  )
}

export default RecordDashboard;