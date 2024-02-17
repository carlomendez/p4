"use client";

import React, { useState } from 'react'
import { osm } from 'pigeon-maps/providers'
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

const StrainMap = ({ latitude, longitude}) => {
  const [state, setRawState] = useState({
    center: [latitude, longitude],
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
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
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
          width={600} 
          height={500}
        >
            <Marker width={40} anchor={[latitude, longitude]} payload={'Location'} onClick={handleMarkerClick}/>
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
export default StrainMap