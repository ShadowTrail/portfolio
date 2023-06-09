import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from './Navbar';
import { RxDividerHorizontal } from "react-icons/rx";
import moon from './moon.png'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;}
`;
const Title = styled.h1`
  font-size: 75px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const What = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const Sub = styled.h2`
  color: #e6ac26;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #e6ac26;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
  height: 600px;
  width: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    100% {
      transform: translateY(30px);
    }
  }
`;

const style = {fontSize: "30px"}
const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <Desc>Watch shadow creatures create the magic. </Desc>
          <What>
            <RxDividerHorizontal style={style} />
            <Sub>What do our shadow creatures do?</Sub>
          </What>
          <Desc>
            Cute little shadow creatures have come together to help humans with
            their amazing development and designing skills.
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#ffca44"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={moon} />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero