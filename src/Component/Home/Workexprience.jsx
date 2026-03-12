import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Workexprience = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Mern Stack Developer",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 120,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className=" text-white">
      {/* 🔥 HERO */}
      <section className="min-h-screen flex flex-col  justify-items-start px-4 sm:px-6 mx-10  mt-15">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight"
        >
          I'm a{" "}
          <span className="inline-block w-[20ch]  text-purple-500 border-r-2 border-purple-500 pr-1 text-left">
            {text}
          </span>
        </motion.h1>

        <section className="flex justify-items-start px-4 sm:px-6 mt-5 md:px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-sans leading-tight"
          >
            Software developer building scalable digital solutions that balance
            performance with business goals
          </motion.h1>
        </section>

        {/* 🚀 WORK EXPERIENCE */}
        <section className="px-4 sm:px-6  md:px-6 py-5 flex flex-col justify-items-start gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-sans"
          >
            Work Experience
          </motion.h2>

          <div className="w-full grid sm:grid-cols-2  grid-cols-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
    w-full
    rounded-2xl
    px-5 py-6
    md:px-8 md:py-7
    xl:px-12 xl:py-9
    bg-[linear-gradient(to_right,#130428_7%,#251043_34%,#38126D_57%,#261045_85%,#190634_100%)]
    border-t-4 border-primary
    flex flex-col md:flex-row
    items-center md:items-start
    gap-4 md:gap-6
    hover:shadow-2xl hover:shadow-purple-800/40
    transition-all
  "
            >
              {/* Image */}
              <img
                src="/work-exp.svg"
                alt="work experience"
                className="h-16 sm:h-20 md:h-24 xl:h-28 w-auto"
              />

              {/* Text */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-2xl xl:text-3xl font-semibold">
                  Software Developer
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base">
                  Designing and developing reliable software products.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Workexprience;
