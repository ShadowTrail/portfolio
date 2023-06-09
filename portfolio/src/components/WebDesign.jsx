import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Fox from "./Fox";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  padding: 20px;
  color: white;
  background-color: #171515;
  opacity: 75%;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 20px;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={"city"} intensity={0}>
            <Fox />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Did you know our shadow creature "Snowy, the white fox" is highly
        creative when it comes to designing attractive websites?
      </Desc>
    </>
  );
};

export default WebDesign;
