import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Work = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })
  const experiences = [
    {
        company: "PT. Kencana Gemilang – Tangerang",
        role: "Supply Chain Staff",
        date: "Mei 2023 – Apr 2025",
        tasks: [
        "Coordinated material flow between operators and production",
        "Improved delivery efficiency and reduced delays",
        ]
    },
    {
        company: "PT. JSI Teknik Jaya – Tangerang",
        role: "Maintenance Intern",
        date: "Apr 2025 – Jul 2025",
        tasks: [
        "Maintained and serviced retail equipment across outlets",
        "Coordinated with staff to resolve technical issues",
        "Minimized downtime through proactive troubleshooting",
        ],
    },
  // Tambah lagi kalau ada
]


  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 })
    } else {
      controls.start({ opacity: 0, x: -50 })
    }
  }, [inView, controls])

  return (
    <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: -50 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.2 }}
        className="p-6  rounded-lg shadow-md bg-gradient-to-t from-sky-400 m-5 z-20"
    >
        <h3 className="text-lg font-semibold mb-2">Work Experience</h3>

        {experiences.map((exp, i) => (
        <div key={i} className="mb-4 text-sm text-gray-700">
            <p className="font-medium">{exp.company}</p>
            <p>{exp.role}</p>
            <p className="text-xs text-gray-500">{exp.date}</p>
            <ul className="list-disc pl-4 mt-1">
            {exp.tasks.map((task, j) => (
                <li key={j}>{task}</li>
            ))}
            </ul>
        </div>
        ))}
    </motion.div>
  )
}

export default Work;