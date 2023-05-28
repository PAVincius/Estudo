/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

function MyCanvas() {
  const texture = useLoader(TextureLoader, '../assets/stp3.png');
  const meshRef = useRef();

  return (
    <Canvas>
      <mesh ref={meshRef}>
        <planeBufferGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </Canvas>
  );
}

function App() {

  return (
      <Canvas>
        <MyCanvas/>
      </Canvas>
  )
}

export default App
