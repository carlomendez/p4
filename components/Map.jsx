"use client";

import React, { useState } from 'react'
import { osm } from 'pigeon-maps/providers'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Map, Marker, ZoomControl } from "pigeon-maps";

const lng2tile = (lon, zoom) => ((lon + 180) / 360) * Math.pow(2, zoom)
const lat2tile = (lat, zoom) =>
  ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
  Math.pow(2, zoom)

const StamenAttribution = () => (
  <span className="map-attribution">
    Map tiles by{' '}
    <a href="http://stamen.com" target="_blank" rel="noreferrer noopener">
      Stamen Design
    </a>
    , under{' '}
    <a href="http://creativecommons.org/licenses/by/3.0" target="_blank" rel="noreferrer noopener">
      CC BY 3.0
    </a>
    . Data by{' '}
    <a href="http://openstreetmap.org" target="_blank" rel="noreferrer noopener">
      OpenStreetMap
    </a>
    , under{' '}
    <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer noopener">
      ODbL
    </a>
    .
  </span>
)

const MapComponent = () => {
    const [province, setProvince] = useState('');
    const handleprovinceChange = (event) => {
    setProvince(event.target.value);
    };
  const [state, setRawState] = useState({
    center: [14.167049, 121.243247],
    zoom: 12,
    provider: {osm},
    animate: true,
    minZoom: 1,
    maxZoom: 18,
    dragAnchor: [48.8565, 2.3475],
  })
  const setState = (stateChanges) => setRawState({ ...state, ...stateChanges })

  const {
    center,
    zoom,
    provider,
    animate,
    minZoom,
    maxZoom,
  } = state

  const handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    if (initial) {
      console.log('Got initial bounds: ', bounds)
    }
    setState({ center, zoom })
  }

  const handleClick = ({ event, latLng, pixel }) => {
    console.log('Map clicked!', latLng, pixel)
  }

  const handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }

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
            <MenuItem value={'Cavite'} onClick={() => setState({ center: [14.21, 120.66], zoom:10 })}>Cavite</MenuItem>
            <MenuItem value={'Laguna'} onClick={() => setState({ center: [14.06, 121.42], zoom:10 })}>Laguna</MenuItem>
            <MenuItem value={'Batangas'} onClick={() => setState({ center: [13.71, 121.18], zoom:10 })}>Batangas</MenuItem>
            <MenuItem value={'Rizal'} onClick={() => setState({ center: [14.74, 121.28], zoom:10 })}>Rizal</MenuItem>
            <MenuItem value={'Quezon'} onClick={() => setState({ center: [14.04, 121.52], zoom:10 })}>Quezon</MenuItem>
        </Select>
        </FormControl>
    </Box>
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <div style={{ maxWidth: 1128, margin: '0 auto' }}>
        <Map
          limitBounds="edge"
          center={center}
          zoom={zoom}
          provider={osm}
          dprs={[1, 2]}
          onBoundsChanged={handleBoundsChange}
          onClick={handleClick}
          animate={animate}
          minZoom={minZoom}
          maxZoom={maxZoom}
          attribution={provider === 'stamenTerrain' || provider === 'stamenToner' ? <StamenAttribution /> : null}
          width={1128} 
          height={500}
        >
            <Marker width={40} anchor={[14.21, 120.66]} payload={'Cavite'} onClick={handleMarkerClick}/>
            <Marker width={40} anchor={[14.06, 121.42]} payload={'Laguna'} onClick={handleMarkerClick}/>
            <Marker width={40} anchor={[13.71, 121.18]} payload={'Batangas'} onClick={handleMarkerClick}/>
            <Marker width={40} anchor={[14.74, 121.28]} payload={'Rizal'} onClick={handleMarkerClick}/>
            <Marker width={40} anchor={[14.04, 121.52]} payload={'Quezon'} onClick={handleMarkerClick}/>
          <ZoomControl />
        </Map>
      </div>
      <div>
        {Math.round(center[0] * 10000) / 10000} ({lat2tile(center[0], zoom)}
        ){' x '}
        {Math.round(center[1] * 10000) / 10000} ({lng2tile(center[1], zoom)}){' @ Zoom: '}
        {Math.round(zoom * 100) / 100}
      </div>
      <div style={{ marginTop: 20 }}>
        <a href="https://github.com/mariusandra/pigeon-maps">Map powered by Pigeon Maps</a>
      </div>
    </div>
    </section>  
  )
}
export default MapComponent