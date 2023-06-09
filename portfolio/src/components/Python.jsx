import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Penguin1 from "./Penguin1";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  color: white;
  background-color: black;
  opacity: 75%;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 550px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Python = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={"city"} intensity={0}>
            <Penguin1 />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        The shadow creature "PengMaster" can make flexible and powerful
        programs.
      </Desc>
    </>
  );
};

export default Python;
