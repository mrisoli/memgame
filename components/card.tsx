import { FC } from "react"

type CardProps = {
  value: number
}

const Card: FC<CardProps> = ({ value }) => <div>{value}</div>

export default Card
