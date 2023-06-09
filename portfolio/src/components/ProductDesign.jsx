import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Nine from "./Nine";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  padding: 20px;
  color: white;
  background-color: black;
  opacity: 75%;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  bottom: 600px;
  right: 280px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={"city"} intensity={0.6}>
            <Nine />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Shadow creature "Nine-tails" can design and develop smart, interactive
        applications too!
      </Desc>
    </>
  );
};

export default ProductDesign;
