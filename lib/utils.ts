export const resetBoard: (count: number) => number[]  = (count) => {
  const numbers = Array.from({length: count}, (_, i) => i)
  return numbers.concat(numbers).sort(() => Math.random() - 0.5)
}
