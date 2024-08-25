import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"

const Computers = ({isMobie}) => {
  console.log(isMobie);
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
      position={[20, 50, 10]}
      intensity={4}
      />
      <primitive object={scene} 
      scale={!isMobie?0.75:0.4}
      position={!isMobie?[0, -2.8, -1.5]:[0, -2, -1]} 
      rotation={[-0.01, -0.2, -0.1]}/>
      
    </mesh>
  );
};

const ComputerCanvas = () => {
  
  const [isMobie, setisMobie] = useState(false)
  
  useEffect(()=>{

    // console.log(window.innerWidth)
    if(window.innerWidth<=500){
      // isMobie(true)
      setisMobie(true);
    }
  }, [])
  return (
    <Canvas 
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      
      <Suspense fallback={null /* Replace with a loader component or element */}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
        <Computers isMobie={isMobie} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputerCanvas;
