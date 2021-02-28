import { FC, useEffect, useState } from "react"
import { useBoardState } from "../lib/context"

type CardProps = {
  value: number
}

const Card: FC<CardProps> = ({ value }) => {
  const [revealed, setRevealed] = useState(false)
  const { active, matched } = useBoardState()

  useEffect(() => {
    setRevealed(matched.has(value) || active.includes(value))
  }, [active, matched])

  return (
    <div>{revealed ? value : 'hidden'}</div>
  )
}

export default Card
