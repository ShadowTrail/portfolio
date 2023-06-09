import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Penguin2 from './Penguin2'
import styled from "styled-components";


const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 50px;
  right: 300px;
  background-color: #171515;
  opacity: 75%;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Figma = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={"city"} intensity={0}>
            <Penguin2 />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Experience shadow creature "__" flaunt its spectacular taste in UI and
        UX designing too!
      </Desc>
    </>
  );
};

export default Figma;
