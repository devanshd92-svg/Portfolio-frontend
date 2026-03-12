import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

export default function Project() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://portfolio-backend-sandy-theta.vercel.app/api/Project")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (

    <section className="bg-[#0c001a] min-h-screen mt-5 text-white py-20 p-6">

      <div className="max-w-7xl mx-auto space-y-28 ">

        {projects?.map((project, index) => (

          <div
            key={project.id}
            className="grid md:grid-cols-2  gap-16 items-center"
          >

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h1 className="text-2xl  md:text-4xl font-bold mb-6">

                {project.title}

              </h1>

              <motion.div className="bg-linear-to-br  from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6  border border-white/10 shadow-lg  w-full lg:w-[calc(100%+15%)] glass-card  ">

               <p className="line-clamp-5"> {project.description}</p>

              </motion.div>

              {/* TECH STACK */}

              {/* <div className="flex gap-3 flex-wrap mb-6">

                {project?.tech?.map((t, i) => (

                  <span
                    key={i}
                    className="bg-purple-600 px-4 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>

                ))}

              </div> */}

              {/* ICON LINKS */}

              <div className="flex gap-6 text-2xl my-4">

                <a href={project.github} target="_blank">
                  <FiGithub />
                </a>

                <a href={project.live} target="_blank">
                  <TbWorld />
                </a>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <img
                src={project?.image?.[0]}
                alt={project.title}
                className="rounded-xl shadow-2xl aspect-5/3 h-full object-cover  "
              />

            </motion.div>

          </div>

        ))}

      </div>

    </section>
  );
}