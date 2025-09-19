// Typewriter.jsx
import { useEffect, useState } from "react"

const Typewriter = ({ texts = [], speed = 10 }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (!texts || !texts[index]) return

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, texts])

  return (
    <h1 className="text-xl text-gray-600">
      {texts?.[index]?.substring(0, subIndex) || ""}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

export default Typewriter
