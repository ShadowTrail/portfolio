import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cat from "./Cat";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  padding: 20px;
  color: white;
  background-color: black;
  opacity: 75%;
  border-radius: 10px;
  position: absolute;
  bottom: 500px;
  right:580px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Illustration = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={"city"} intensity={0}>
            <Cat />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Let little shadow creatures stun you with their magical artistic
        talent!
      </Desc>
    </>
  );
};

export default Illustration;
