import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import landscapeBg from "../assets/landscapeBg.png"

const Education = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 })
    } else {
      controls.start({ opacity: 0, x: 50 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: 50 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 1.2 }}
      className="p-6 m-5 rounded-lg shadow-md bg-gradient-to-t from-sky-400 relative z-20"
    >
      <h3 className="text-lg font-semibold mb-2">Education</h3>
      <div className="text-sm text-gray-700">
        <p className="font-medium">SMKN 8 Kab. Tangerang</p>
        <p>Vocational High School – Computer & Network Engineering</p>
        <p className="text-xs text-gray-500">Aug 2025 – Present</p>
        <p className="mt-2">
          Relevant Skills: Networking, Database, Web Development, HTML, CSS, JavaScript
        </p>
      </div>
    </motion.div>
  )
}

export default Education
