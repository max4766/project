import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Character from './model/character.jsx';
import Building from './model/building.jsx';
import Test from './model/test.jsx';
// import Null from './model/Null.jsx'; // <- 이 파일은 손상되어 사용 불가능!

export default function App() {
   return (
      <>
         <div class="d-flex">
            
            <Canvas
               camera={{ position: [15, 5, 22.25], fov: 0.6 }}
               style={{
                  backgroundColor: '#111a21',
                  width: '35vw',
                  height: '100vh',
               }}
            >
               <Suspense fallback={null}>
                  <Building position={[-0.035, -0.05, 0]} />
               </Suspense>
               <OrbitControls />
               <ambientLight intensity={1.25} />
               <directionalLight intensity={3.4} />
            </Canvas>

            <Canvas
               camera={{ position: [15, 5, 22.25], fov: 8 }}
               style={{
                  backgroundColor: '#1E2E3B',
                  width: '33vw',
                  height: '100vh',
               }}
            >
               <Suspense fallback={null}>
                  <Character position={[0.025, -0.9, 0]} />
               </Suspense>
               <OrbitControls />
               <ambientLight intensity={0.75} />
               <directionalLight intensity={2.4} />
            </Canvas>
            
            <Canvas
               camera={{ position: [15, 5, 22.25], fov: 25 }}
               style={{
                  backgroundColor: '#2C4354',
                  width: '33vw',
                  height: '100vh',
               }}
            >
               <Suspense fallback={null}>
                  <Test position={[-2.5, -2.2, 0]} />
               </Suspense>
               <OrbitControls />
               <ambientLight intensity={0.15} />
               <directionalLight intensity={2.4} />
            </Canvas>

         </div>
         
         
      </>
   );
}

