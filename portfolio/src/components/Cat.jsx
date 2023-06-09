/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 cat.gltf --transform
Author: LeafChan (https://sketchfab.com/CuteLeaf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/halloween-2ec65917ad7f4568850260567172cf10
Title: Halloween!!🎃 👻 🍭
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./cat-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="group18">
          <group name="pPlane16" position={[2.607, -1.796, -1.815]}>
            <mesh name="pPlane16_aiStandardSurface4_0" geometry={nodes.pPlane16_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane15" position={[3.216, -2.165, -1.972]}>
            <mesh name="pPlane15_aiStandardSurface4_0" geometry={nodes.pPlane15_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane11" position={[3.535, 1.297, -3.705]}>
            <mesh name="pPlane11_aiStandardSurface4_0" geometry={nodes.pPlane11_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane8" position={[-0.193, 2.585, -3.705]}>
            <mesh name="pPlane8_aiStandardSurface4_0" geometry={nodes.pPlane8_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane21" position={[-2.505, -2.516, -4.576]}>
            <mesh name="pPlane21_aiStandardSurface4_0" geometry={nodes.pPlane21_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane22" position={[-2.904, 2.023, -3.692]}>
            <mesh name="pPlane22_aiStandardSurface4_0" geometry={nodes.pPlane22_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane23" position={[-0.026, 1.452, -4.489]}>
            <mesh name="pPlane23_aiStandardSurface4_0" geometry={nodes.pPlane23_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane24" position={[3.477, -0.965, -4.141]}>
            <mesh name="pPlane24_aiStandardSurface4_0" geometry={nodes.pPlane24_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane25" position={[-4.501, -0.416, -3.705]}>
            <mesh name="pPlane25_aiStandardSurface4_0" geometry={nodes.pPlane25_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane26" position={[1.442, -1.408, -3.705]}>
            <mesh name="pPlane26_aiStandardSurface4_0" geometry={nodes.pPlane26_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane27" position={[4.557, -2.437, -3.705]}>
            <mesh name="pPlane27_aiStandardSurface4_0" geometry={nodes.pPlane27_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane34" position={[4.115, 0.709, -3.705]}>
            <mesh name="pPlane34_aiStandardSurface4_0" geometry={nodes.pPlane34_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane35" position={[-1.724, -2.173, -3.705]}>
            <mesh name="pPlane35_aiStandardSurface4_0" geometry={nodes.pPlane35_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
          <group name="pPlane38" position={[3.03, -2.443, -1.972]}>
            <mesh name="pPlane38_aiStandardSurface4_0" geometry={nodes.pPlane38_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
          </group>
        </group>
        <mesh name="polySurface53_aiStandardSurface2_0" geometry={nodes.polySurface53_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} />
        <mesh name="pPlane6_aiStandardSurface4_0" geometry={nodes.pPlane6_aiStandardSurface4_0.geometry} material={materials.aiStandardSurface4} />
        <mesh name="polySurface151_aiStandardSurface6_0" geometry={nodes.polySurface151_aiStandardSurface6_0.geometry} material={materials.aiStandardSurface6} scale={0.998} />
        <mesh name="polySurface51_aiStandardSurface1_0" geometry={nodes.polySurface51_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} scale={0.998} />
        <mesh name="polySurface48_aiStandardSurface7_0" geometry={nodes.polySurface48_aiStandardSurface7_0.geometry} material={materials.aiStandardSurface7} />
        <mesh name="polySurface152_aiStandardSurface8_0" geometry={nodes.polySurface152_aiStandardSurface8_0.geometry} material={materials.aiStandardSurface8} />
      </group>
    </group>
  )
}

useGLTF.preload('./cat-transformed.glb')
