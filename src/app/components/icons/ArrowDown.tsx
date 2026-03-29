import React from "react"

type ArrowDirection = "up" | "down" | "left" | "right"

interface ArrowDownProps {
  className?: string
  direction?: ArrowDirection
}

const rotationMap: Record<ArrowDirection, string> = {
  down: "rotate-0",
  right: "rotate-90",
  up: "rotate-180",
  left: "-rotate-90",
}

const ArrowDown = ({
  className = "w-4 h-4",
  direction = "down",
}: ArrowDownProps) => {

  const rotationClass = rotationMap[direction]

  return (
    <svg
      className={`${className} ${rotationClass}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDown