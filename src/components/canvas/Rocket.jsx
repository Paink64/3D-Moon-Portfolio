import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const RocketCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1}/>
        <OrbitControls
          enableZoom={false}
        />
            <mesh position={[0,2.6,3]}>
              <meshStandardMaterial color="#FE0039"/>
              <coneGeometry args={[1, 2, 6]}/>
            </mesh>
            <mesh position={[0,1,3]}>
              <cylinderGeometry args={[1, 1, 3]}/>
            </mesh>
            <mesh position={[0,1,3]}>
              <cylinderGeometry args={[1, 1, 3]}/>
            </mesh>
            <mesh position={[0,-1,3]} rotation={[Math.PI, 0, 0]}>
              <cylinderGeometry args={[.5, .5, .5]}/>
            </mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RocketCanvas;