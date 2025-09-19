import { motion } from "framer-motion"
import workLandscape from "../assets/workLandscape.png"
import chillApp from "../assets/chillApp.png"

const projectVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const projects = [
  {
    title: "CV Web App",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: workLandscape,
    link: "https://satria-nb-cv-git-main-hashasin40s-projects.vercel.app",
    bg: [340, 10],
  },
  {
    title: "Dashboard UI",
    tech: ["Next.js", "Redux Toolkit"],
    image: chillApp,
    link: "https://new-chill-1-0-git-main-hashasin40s-projects.vercel.app",
    bg: [205, 245],
  },
  // Tambah project lainnya...
]


const hue = (h) => `hsl(${h}, 100%, 50%)`

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
  marginTop: 80,
}

const splash = {
  position: "absolute",
  zIndex: 0,
  top: 0,
  left: 0,
  right: 0,
  pointerEvents: "none", // ✅ lowercase
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  zIndex: 10,
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
}

function ProjectCard({ title, tech, image, link, bg, i }) {
  const background = `linear-gradient(306deg, ${hue(bg[0])}, ${hue(bg[1])})`

  return (
    <motion.div
      className={`project-card-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={projectVariants}
      className="flex flex-col items-center p-4"
      >
        <img src={image} alt={title} style={{ width: "100%", height: "50%", position: "center", borderRadius: 12 }} />
        <h3 style={{ fontSize: 20, marginTop: 12 }}>{title}</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          {tech.map((t, idx) => (
            <span key={idx} style={{
              background: "#e0e7ff",
              color: "#3730a3",
              padding: "4px 8px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500
            }}>
              {t}
            </span>
          ))}
        </div>
        <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, x: 2 }}
        className="mt-3 text-sm text-blue-600 z-10 relative rounded-md bg-blue-50 px-3 py-1 hover:bg-blue-200 cursor-pointer"
        >
        View Project →
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectSection() {
  return (
    <section className="bg-sky-200 py-20">
    <div style={container}>
      {projects.map((p, i) => (
        <ProjectCard key={p.title} {...p} i={i} />
      ))}
    </div>
    </section>
  )
}

