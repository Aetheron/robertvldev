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
  const [debounce, setDebounce] = useState<boolean>(true)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const AnimatedCard = animated(Card)

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setFlipped((state) => (state = !state))
        setTimeout(() => setDebounce(false), 100)
      }}
      onMouseLeave={() => {
        if (!debounce) {
          setFlipped((state) => (state = !state))
          setDebounce(true)
        }
      }}
    >
      <AnimatedCard
        className="bg-white text-gray-700 text-center w-52 h-52"
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
        title={title}
      >
        {front}
      </AnimatedCard>
      <AnimatedCard
        className="bg-white text-gray-700 text-center w-52 h-52 absolute top-0"
        style={{ opacity, transform, rotateX: "180deg" }}
      >
        {back}
      </AnimatedCard>
    </div>
  )
}

export default FlipCard
