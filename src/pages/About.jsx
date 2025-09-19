import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "./TypeWriter";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutData } from "../redux/aboutSlice";
import StackIcon from "../component/StackIcon";
import landscapeBg from "../assets/landscapeBg.png"
import workLandscape from "../assets/workLandscape.png"


import Education from "../component/Education";
import Work from "../component/Work";

const About = () => {
  const dispatch = useDispatch();

  // Ambil semua state sekaligus
  const { titles, techs, loading, error } = useSelector((state) => state.about);

  useEffect(() => {
    dispatch(fetchAboutData()); // <- harus sama dengan slice
  }, [dispatch]);

  return (
    <>
    <div className="bg-sky-200">
        <div className="viewport min-h-screen flex flex-col md:flex-row items-center gap-2 bg-sky-200">
    `        <div className="flex flex-col items-start bg-transparent m-4 p-6 gap-6 w-screen max-w-4xl rounded-lg shadow-md">
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="w-full bg-gradient-to-t from-sky-400  rounded-lg shadow-md text-start text-gray-800 p-6 mt-4"
                >
                <h2 className="text-2xl font-bold text-center">About Me</h2>
                {loading ? (
                    <p className="text-sm text-gray-400">Loading titles...</p>
                ) : error ? (
                    <p className="text-sm text-red-400">Error: {error}</p>
                ) : titles.length > 0 ? (
                    <Typewriter texts={titles} />
                ) : (
                    <p className="text-sm text-gray-400">No data found</p>
                )}
                </motion.div>
            </div>
            <div className="flex flex-col items-start w-screen max-w-4xl bg-transparent m-4 p-6 gap-6 rounded-lg">
                <h4 className="self-center text-lg font-semibold">Tech Stack</h4>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-wrap gap-3 flex-row items-center justify-center bg-transparent pb-6 pl-3 pr-3 w-full max-w-4xl rounded-lg shadow-md bg-gradient-to-t from-sky-400"
                >
                    {techs.map((tech) => (
                    <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="hover:scale-105 transition-transform duration-200 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm flex-row items-center gap-2 flex"
                    >
                        <StackIcon name={tech} size={18}/>
                        {tech}
                    </motion.span>
                    ))}
                </motion.div>
            </div>
`        </div>

            <div className="relative">
            {/* Background image */}
            <motion.img
            src={landscapeBg}
            alt="Landscape Background"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-48 object-cover z-0"
            />


            {/* Gradasi overlay dari kiri ke kanan */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-white/85 to-blue/90 pointer-events-none z-10" />

            {/* Konten Education di atas background */}
            <div className="relative z-20 flex flex-col items-start justify-start mt-6">
                <Education />
            </div>
            </div>

                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-indigo-50 p-4 rounded-lg shadow-md text-center max-w-xl mx-auto"
                >
                <p className="text-sm text-gray-700 italic">
                    “Career-switcher with practical training in front-end development and a solid background in technical operations and logistics.”
                </p>
                </motion.div>

            <div className="relative w-full">
            {/* Background image */}
            <img
                src={workLandscape}
                alt="work Landscape Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Gradasi overlay dari kiri ke kanan */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue/90 to-white/85 pointer-events-none z-10" />


            <div className="flex flex-col items-end justify-end mt-6 relative z-20">
            <Work />
            </div>
            </div>
        </div>
        </>
    );
};

export default About;
