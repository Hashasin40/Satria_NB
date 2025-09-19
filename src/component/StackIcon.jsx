import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiAffinitydesigner,
} from "react-icons/si"
  import { BiLogoJavascript,BiLogoFirebase } from 'react-icons/bi';
  import { TbBrandFramerMotion } from 'react-icons/tb';
  import { RiNextjsFill } from 'react-icons/ri';


const techIcons = {
    React: FaReact,
    Tailwind: SiTailwindcss,
    Framer: SiFramer,
    Github: FaGithub,
    JavaScript: BiLogoJavascript,
    FramerMotion: TbBrandFramerMotion,
    Figma: FaFigma,
    HTML5: FaHtml5,
    CSS3: FaCss3,
    Bootstrap: FaBootstrap,
    Nextjs: RiNextjsFill,
    FireBase: BiLogoFirebase,
  // Tambahin sesuai kebutuhan lo
}

const StackIcon = ({ name, size = 20, className = "" }) => {
  const IconComponent = techIcons[name]

  return IconComponent ? (
    <IconComponent size={size} className={className} title={name} />
  ) : (
    <span className="text-xs text-gray-400">{name}</span>
  )
}

export default StackIcon
