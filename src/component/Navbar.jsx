import {Link} from 'react-router-dom';

const Navbar= () => {
    return (
        <nav className=" rounded-lg shadow-sm mb-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6 bg-sky-200 text-gray-800">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className=" group px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md"></span>
                                    <span className="relative group-hover:text-white">Home</span>
                                </Link>                                
                                <Link
                                    to="/about"
                                    className=" group px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md"></span>
                                    <span className="relative group-hover:text-white">About</span>
                                </Link>                                
                                <Link
                                    to="/project"
                                    className=" group px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md"></span>
                                    <span className="relative group-hover:text-white">Project</span>
                                </Link>                                
                                <Link
                                    to="/contact"
                                    className=" group px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md"></span>
                                    <span className="relative group-hover:text-white">Contact</span>
                                </Link>                                
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


// const [isOn, setIsOn] = useState(false)
// const toggleSwitch = () => setIsOn(!isOn)

{/* <button
  className={`flex items-center p-2 w-[40px] h-[30px] rounded-full cursor-pointer bg-[var(--hue-3-transparent)] ${
    isOn ? "justify-start" : "justify-end"
  }`}
  onClick={toggleSwitch}
>
  <motion.div
    className="w-[12px] h-[12px] rounded-full bg-[#9911ff]"
    layout
    transition={{
      type: "spring",
      bounce: 0.2,
      duration: 0.2,
    }}
  />
</button> */}