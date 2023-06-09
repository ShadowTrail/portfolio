/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 penguin1.gltf --transform
Author: Ashley_koh (https://sketchfab.com/Ashley_koh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-penguin-bde7dc4db5164892b98cebd359ba4f06
Title: Cute Penguin
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./penguin1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat_1} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.defaultMat_0} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.defaultMat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./penguin1-transformed.glb')
