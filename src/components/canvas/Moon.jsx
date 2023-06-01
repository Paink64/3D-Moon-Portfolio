import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { moon } from "../../assets"
import CanvasLoader from "../Loader";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const MoonCanvas = () => {
  const [colorMap] = useLoader(TextureLoader, [
    moon
  ])
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader/ >}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={.5} />
        <mesh scale={2.5} rotation={[2, -0.50, 1.5]}>
          <meshStandardMaterial 
            map={colorMap}
          />
          <sphereGeometry />
        </mesh>

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default MoonCanvas