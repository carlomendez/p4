"use client";

import { Map, Marker, ZoomControl } from "pigeon-maps"
import {useState} from 'react';

const MapPage = () => {
    const [center, setCenter] = useState([15.0, 120.3])
    return (

                <Map width={1128} height={500} center={center} defaultZoom={11}  >
                    <ZoomControl />
                    <Marker width={40} anchor={[14.21, 120.66]} />
                    <Marker width={40} anchor={[14.06, 121.42]} />
                    <Marker width={40} anchor={[13.71, 121.18]} />
                    <Marker width={40} anchor={[14.74, 121.28]} />
                    <Marker width={40} anchor={[14.04, 121.52]} />
                </Map>

      )
  }
  
  export default MapPage