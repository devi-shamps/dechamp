import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import {Cursor} from "./components/Cursor.tsx";
function App() {
    return (
        <>
            <Cursor />
            <Canvas>
                <color attach="background" args={["#ffffff"]} />
                <Suspense fallback={null}>
                    <ScrollControls horizontal damping={0.2} pages={3}>
                        <Scroll>
                            <Experience section={0} menuOpened={false} />
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </>
    );
}

export default App;
