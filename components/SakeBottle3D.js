import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function Bottle({ texture }) {
  const mesh = useRef()
  const [model, setModel] = useState()
  
  const textureMap = useTexture(`/textures/${texture}.jpg`)

  useEffect(() => {
    // Choose the appropriate loader based on your file type
    const loader = new OBJLoader()  // or new FBXLoader() for FBX files
    loader.load(
      '/models/sake_bottle.obj',  // or 'sake_bottle.fbx' for FBX files
      (obj) => {
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({ map: textureMap })
          }
        })
        setModel(obj)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log('An error happened:', error)
      }
    )
  }, [textureMap])

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.2
    }
  })

  return model ? (
    <mesh ref={mesh} scale={[0.02, 0.02, 0.02]}> {/* Adjust scale as needed */}
      <primitive object={model} />
    </mesh>
  ) : null
}

export default function SakeBottle3D({ texture }) {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Bottle texture={texture} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}