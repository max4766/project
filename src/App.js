import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import Character from './character.jsx';
// import Building from './building.jsx';
import { Model } from './test.jsx';
// import { Model } from './Null.jsx';

export default function App() {
   return (
      <Canvas
         camera={{ position: [2, 0, 22.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={-0.5} />
         <directionalLight intensity={15.4} />
         <Suspense fallback={null}>
            {/* <Character position={[0.025, -0.9, 0]} /> */}
            {/* <Building position={[0, 0, 0]} /> */}
            <Model position={[-1.5, -1.5, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}

