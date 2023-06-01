import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { 
  grass,
  grassNormal,
  grassDisp,
  grassOcc,
  grassRough } from "../../assets"
import CanvasLoader from "../Loader";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const EarthCanvas = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    grass,
    grassDisp,
    grassNormal,
    grassRough,
    grassOcc
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
        <mesh scale={500} position={[0, 0, -1400]} rotation={[0, 0, 0]}>
          <meshStandardMaterial 
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
          />
          <sphereGeometry />
        </mesh>

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas