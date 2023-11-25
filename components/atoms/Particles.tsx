/* eslint-disable react/no-unknown-property */
"use client"

import { useFrame } from "@react-three/fiber"
import { FC, MutableRefObject, useMemo, useRef } from "react"
import { DynamicDrawUsage, Points } from "three"

interface ParticleProps {
    count: number
    mouse: MutableRefObject<[number, number]>
}

export const Particles: FC<ParticleProps> = ({ count, mouse }) => {
  const pointsRef = useRef<Points>(null!)

  const positions = useMemo(() => {
    const positions = []

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      positions.push(x, y, z)
    }

    return new Float32Array(positions)
  }, [count])

  useFrame(() => {
    if (pointsRef.current) {
      // Apply a parallax effect based on mouse position
      const parallaxX = -mouse.current[0] * 0.0001
      const parallaxY = mouse.current[1] * 0.0001
      pointsRef.current.position.x += (parallaxX - pointsRef.current.position.x) * 0.1
      pointsRef.current.position.y += (parallaxY - pointsRef.current.position.y) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          usage={DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.015} color="#FFFFFF" transparent opacity={0.7} />
    </points>
  )
}
