import { useState, useRef, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import './components/styles/App.css'

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3BlY3RyZW43IiwiYSI6ImNtZ2RuOG15ZzF3bm8yc29seTJybDkwNzUifQ.TlpJLRc81i0e6PYDBGezHg'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      projection: 'mercator',
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <NavBar Page={'Smartcity Planner'} />
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App
