import { animated, useSpring } from "@react-spring/web"
import { Card } from "primereact/card"
import React, { useState } from "react"

export interface CardType {
  title: string
  front: React.ReactNode
  back: React.ReactNode
}

const FlipCard: React.FC<CardType> = ({ title, front, back }) => {
  const [flipped, setFlipped] = useState<boolean>(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const AnimatedCard = animated(Card)

  return (
    <div className="relative">
      <AnimatedCard
        className="bg-white text-gray-700 text-center w-52 h-52"
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
        title={title}
        onMouseEnter={() => setFlipped((state) => (state = !state))}
        onMouseLeave={() => setFlipped((state) => (state = !state))}
      >
        {front}
      </AnimatedCard>
      <AnimatedCard
        className="bg-white text-gray-700 text-center w-52 h-52 absolute top-0"
        style={{ opacity, transform, rotateX: "180deg" }}
        onMouseEnter={() => setFlipped((state) => (state = !state))}
        onMouseLeave={() => setFlipped((state) => (state = !state))}
      >
        {back}
      </AnimatedCard>
    </div>
  )
}

export default FlipCard
