import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-r from-sky-500  z-[9999]">
      <motion.div
        className="w-8 h-8 border-2 border-blue-500 border-t-blue-600 rounded-full"
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  )
}
