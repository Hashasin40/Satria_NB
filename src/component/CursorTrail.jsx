import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CursorTrail = () => {
    const [trail, setTrail] = useState([])
    const colors = ["bg-emerald-400", "bg-sky-400", "bg-indigo-400"]

  useEffect(() => {
    const handleMove = (e) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      }
      setTrail((prev) => [...prev.slice(-10), newDot])
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <AnimatePresence>
      {trail.map((dot, i) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.1 }}
          className={`fixed w-3 h-3 rounded-full ${colors[i % colors.length]} pointer-events-none blur shadow-lg`}
          style={{
            left: dot.x,
            top: dot.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </AnimatePresence>
  )
}

export default CursorTrail
