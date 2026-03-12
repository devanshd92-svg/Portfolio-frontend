

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = "69a6a6f34cdee1ad61e1fca2";

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://portfolio-backend-five-rosy-57.vercel.app/api/User/${userId}`);
        const result = await res.json();

        setUserData(result.data); 
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const memoizedUser = useMemo(() => {
    if (!userData) return null;

    return {
      name: userData.name || "Devansh",
      image: userData.image?.[0] || "/default-avatar.png", 
      resume: userData.resume || "#",
      role: "Developer",
    };
  }, [userData]);

 
  const handleResumeClick = useCallback(() => {
    if (memoizedUser?.resume) {
      window.open(memoizedUser.resume, "_blank");
    }
  }, [memoizedUser]);

  if (loading) return <div className="min-h-screen bg-[#0a021a]" />;
  if (!memoizedUser) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[600px] w-full  flex items-center justify-center overflow-hidden px-10 py-20 font-sans"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Profile Image with Glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-900/20 rounded-full blur-[100px] scale-150" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10"
          >
            <img
              src={memoizedUser.image}
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-white max-w-2xl">
          <div className="mb-4">
            <span className="text-zinc-400 text-sm md:text-base">
              Hello I Am{" "}
              <span className="text-purple-500 font-medium">
                {memoizedUser.name}
              </span>
            </span>
          </div>

          <h3 className="text-zinc-300 text-lg md:text-xl font-light underline decoration-purple-500/50 mb-4">
            A {memoizedUser.role} who
          </h3>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Judges a Product <br />
            by its{" "}
            <span className="text-purple-500 italic relative">code...</span>
          </h1>

          <button
            onClick={handleResumeClick}
            className="w-fit px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Download Resume
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
