import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiFigma,
  SiReact,
  SiC,
  SiNodedotjs,
  SiRedux,
  SiJavascript,
  
  SiVercel,
  SiNextdotjs,
  SiTailwindcss,
  SiClerk,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
// ===== DATA =====
const TOP_ICONS = [
  { icon: SiFigma },
  { icon: SiReact },
  { icon: SiC },
  { icon: SiNodedotjs },
  { icon: SiRedux },
  { icon: SiJavascript },
  
];

const MID_ICONS = [
  { name: "Vercel", icon: SiVercel, color: "white" },
  { name: "NextJS", icon: SiNextdotjs, color: "white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Clerk", icon: SiClerk, color: "white" },
  { name: "Express", icon: SiExpress, color: "#828282" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];
const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
];

export default function TechOrbitHero() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
  const resize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  window.addEventListener("resize", resize);
  return () => window.removeEventListener("resize", resize);
}, []);


  
  return (
    <div className="relative min-h-[120vh] w-full my-10 text-white flex  justify-center ">
      {/* ===== GLOBAL PURPLE GLOW ===== */}
      <div className="absolute  rounded-full blur-[140px]" />

      {/* ===== HEADING ===== */} 
      {/* <div className="absolute top-6 text-center px-4">
        <h1 className="text-xl md:text-3xl font-medium opacity-90">
          that builds meaningful software, with a strong focus on accessibility
        </h1>
      </div> */}

      <div className="relative mt-5   flex flex-col items-center">
        {/* ===== TOP ICON ROW ===== */}
        <div className="flex gap-4 mb-6 flex-wrap justify-center z-20">
          {TOP_ICONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl"
              >
                <Icon size={20} />
              </motion.div>
            );
          })}
        </div>

        {/* ===== SECOND ICON ROW ===== */}
        <div className="flex gap-6 mb-70 flex-wrap justify-center z-20">
          {MID_ICONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center"
              >
                <Icon size={22} color={item.color} />
              </motion.div>
            );
          })}
        </div>

        {/* ===== CURVED CONNECTION LINES ===== */}
        <svg
          className="absolute top-[120px]"
          width="700"
          height="400"
          viewBox="0 0 700 420"
          fill="none"
        >
          {MID_ICONS.map((_, i) => {
            const startX = 120 + i * 90; // spread like screenshot
            return (
              <path
                key={i}
                d={`M ${startX} 1 C ${startX} 170, 350 220, 350 300`}
                stroke="rgba(168,85,247,0.45)"
                strokeWidth="1.4"
                fill="none"
              />
            );
          })}
        </svg>

        {/* ===== CENTER HUB GLOW ===== */}
        <div className="absolute top-[220px] w-[520px] h-[520px] bg-purple-600/30 rounded-full blur-[120px]" />

        {/* ===== CENTER LOGO ===== */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-44 h-44 rounded-full bottom-35 bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-6xl font-bold shadow-[0_0_100px_rgba(168,85,247,0.7)] z-30"
        >
          <div className="text-white text-6xl font-serif italic border-y-2 border-white/30 px-6">
            D
          </div>
        </motion.div>

        {/* ===== ORBIT RINGS (PERSPECTIVE) ===== */}
       <div className="absolute overflow-visible w-full h-[28vh] sm:h-[35vh] top-60  lg:h-[40vh] xl:top-70 pointer-events-none ">
      {[2,2,2, 2,2,2].map((ring, ringIndex) => {
        
        // Responsive ring size
        const baseWidth = screenWidth * 0.22;
        const baseHeight = screenHeight * 0.12;

        const ringWidth = ring * baseWidth;
        const ringHeight = ring * baseHeight;

        return (
          <motion.div
            key={ring}
            className="absolute top-0 left-1/2 -translate-x-1/2 transform-gpu will-change-transform"
            style={{
              width: ringWidth,
              height: ringHeight,
            }}
            animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
            transition={{
              repeat: Infinity,
              duration: 30 + ringIndex * 2,
              ease: "linear",
            }}
          >
            {/* Ring Border */}
            <motion.div
              className="absolute inset-0 rounded-[50%] border border-purple-400/25"
            />

            {/* Icons */}
            {MID_ICONS.map((item, i) => {
              const Icon = item.icon;

              const angle = (i / MID_ICONS.length) * (1.1 * Math.PI);

              const x = (ringWidth / 2) * Math.cos(angle);
              const y = (ringHeight / 2) * Math.sin(angle);

              return (
                <motion.div
                  key={i}
                  className="absolute  flex items-center justify-center
                  bg-white/10 rounded-full border border-white/20 backdrop-blur-md"
                  style={{
                    width: screenWidth < 640 ? 30 : 40,
                    height: screenWidth < 640 ? 30 : 40,
                    left: `calc(50% + ${x}px - ${
                      screenWidth < 640 ? 15 : 20
                    }px)`,
                    top: `calc(50% + ${y}px - ${
                      screenWidth < 640 ? 15 : 20
                    }px)`,
                  }}
                >
                  <Icon size={screenWidth < 640 ? 16 : 19} color={item.color} />
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
      </div>
    </div>
  );
}
