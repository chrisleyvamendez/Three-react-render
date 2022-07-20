import React, { Suspense, useRef } from 'react'
import * as THREE from 'three';
import { Canvas , useFrame} from '@react-three/fiber'
import { Environment, OrbitControls, Stage, Bounds, BakeShadows} from '@react-three/drei'
import Model from './Model'


export default function Viewer() {
  const ref = useRef()
  return (
  <div className="webgl-render">
    <Canvas className='canvas' orthographic shadows shadowmap="true" dpr={[1, 2]} camera={{ fov: 10 , position: [-90,80,85], zoom: 2}}>
       <ambientLight intensity={0.01} castShadows/>
       <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" />
       <spotLight castShadow color="orange" intensity={1} position={[10, 60, 40]} angle={0.25} penumbra={1} shadow-mapSize={[128, 128]} shadow-bias={0.00005} />
        <directionalLight castShadow intensity={0.02}  isDirectionalLight="true" position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        </directionalLight>
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.4}>
            <Model />
          </Bounds>
          <Environment preset={'dawn'} intensity={0.02}  environment="lobby"/>
        </Suspense>
        <OrbitControls 
        ref={ref} 
        makeDefault
        minAzimuthAngle={-2}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={false}
        enablePan={true}
        zoomSpeed={0.3} />
        <mesh scale={200} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 4]} receiveShadow>
        <planeGeometry />
        <shadowMaterial transparent opacity={0.45} />
      </mesh>
      </Canvas>
    </div>
  )
}