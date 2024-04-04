import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Character from './model/character.jsx';
import Building from './model/building.jsx';
import Test from './model/test.jsx';
import Null from './model/Null.jsx';

export default function App() {
   return (
      <>
         <Canvas
            camera={{ position: [15, 5, 22.25], fov: 0.5 }}
            style={{
               backgroundColor: '#111a21',
               width: '100%',
               height: '25vh',
            }}
         >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={-0.5} />
            <directionalLight intensity={15.4} />
            <Suspense fallback={null}>
               {/* <Character position={[0.025, -0.9, 0]} /> */}
               <Building position={[0, 0, 0]} />
               {/* <Test position={[-1.5, -1.5, 0]} /> */}
               {/* <Null position={[0,0,0]} /> */}
            </Suspense>
            <OrbitControls />
         </Canvas>
      </>
   );
}

