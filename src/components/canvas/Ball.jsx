import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload,useTexture } from '@react-three/drei'


const Ball = (props) => {

  const [decal] =useTexture([props.imgUrl]);
  // decal.flipY = false;
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>

      <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]}/>
          <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading/>

          <Decal
          rotation={[2*Math.PI, 0, 6.25]}
          flatShading
          position={[0, 0, 1]}
          map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas=({icon})=>{
  
  return (
    <Canvas 
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}>
      
      <Suspense fallback={null /* Replace with a loader component or element */}>
        <OrbitControls 
        enableDamping={true}
        dampingFactor={1}
          enableZoom={false}
          />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas