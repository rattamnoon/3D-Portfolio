import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Atom } from "@/components";

const Development = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Suspense fallback={null}>
        <Atom />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default Development;
