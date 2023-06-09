import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import a from '../img/logo.png'
import { AmbientLight, TextureLoader } from "three";

const Cube = () => {
  const textRef = useRef();
  // useFrame(
  //   (state) =>
  //     (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  // );
  const scene = new TextureLoader().load(a);
  
  return (
    <mesh ref={textRef}>
      <boxGeometry />
      <meshStandardMaterial attach="material" color={"white"} map={scene}>
        <RenderTexture image={a}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />

          {/* <Text ref={textRef} fontSize={3} color="white">
            Hi!
          </Text> */}
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
