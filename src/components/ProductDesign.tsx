import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Shoe } from "@/components";

const ProductDesign = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Shoe color={undefined} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default ProductDesign;
