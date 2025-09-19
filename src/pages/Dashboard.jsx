import { motion } from "framer-motion"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"


const Dashboard = () => {  

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-sky-200">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full max-w-6xl mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full sm:w-1/2 bg-gradient-to-t from-sky-400 to-indigo-4
                     p-6 rounded-lg shadow-md mt-6 mx-4 gap-6 text-start text-gray-800"
        >
        <div className="flex flex-row items-start">
          <img src="/avatar2.png" alt="foto" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"/>
          <div className="ml-4">
            <h2 className="text-xl font-bold ">Satria Nurrahmat Baihaqi</h2>
            <p className=" mt-2">
              SMK graduate in Computer & Network Engineering transitioning into a career as a Front-End Developer. Passionate about building scalable, responsive, and user-friendly web applications.
            </p>
          </div>
        </div>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-row items-center gap-2 mt-2"
      >
        {/* Icon links here */}
        <a
          href="https://github.com/Hashasin40"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faSquareGithub} className="text-3xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/satria-nurrahmat-baihaqi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className=" text-3xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />
        </a>
        <a
          href="mailto:rahmatsatria088@gmail.com"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className=" text-3xl transition-transform duration-300 hover:scale-110 hover:rotate-6" />
        </a>

      </motion.div>


      {/* Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full sm:w-auto flex justify-center items-center p-6 mt-6"
      >
        <a
          href="/cv-satria.pdf"
          download
          className="group bg-gradient-to-t from-sky-400 hover:from-sky-600 hover:to-indigo-600 
          text-zinc-900 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center gap-2"
        >
          Download CV
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FontAwesomeIcon icon={faDownload} className="text-lg" />
          </motion.span>
        </a>
      </motion.div>
        
    </div>
  )
}

export default Dashboard


