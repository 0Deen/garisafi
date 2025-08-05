import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ color }) {
  const group = useRef();
  const { scene, materials } = useGLTF("/mclaren.glb");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (materials && color) {
      Object.values(materials).forEach((mat) => {
        if (mat.color) mat.color.set(color);
      });
    }
  }, [color, materials]);

  return (
    <primitive
      object={scene}
      ref={group}
      scale={[0.01, 0.01, 0.01]}
      position={[0, -1, 0]}
    />
  );
}

useGLTF.preload("/mclaren.glb");
