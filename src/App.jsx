import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { OrbitControls, useTexture } from '@react-three/drei'
import Cyl from './Cyl'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const App = () => {

  return (
    <div className="div">
      <Canvas flat camera={{ fov: 60, position: [0, 0, 5] }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
      
    </div>
  )
}

export default App