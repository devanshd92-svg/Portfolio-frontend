import { Linkedin, Github, Instagram, Phone } from "lucide-react";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#120022] to-[#22053a] text-white py-16 flex flex-col items-center text-center">

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="flex flex-col items-center gap-1 hover:text-purple-300 transition"
      >
        <span className="text-xl sm:text-2xl">⌃</span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-medium">
          Back to Top
        </span>
      </button>

      <p className="text-gray-400 mt-5 text-sm sm:text-base">
        You may also find on these platform
      </p>

      {/* Icons */}
      <div className="flex gap-6 mt-4">
        <a
          href="https://linkedin.com/in/dhananjay-dhiman-b887a032a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <Linkedin size={22} />
        </a>

        <a href="#" className="hover:text-purple-400 transition">
          <Github size={22} />
        </a>

        <a href="#" className="hover:text-purple-400 transition">
          <Instagram size={22} />
        </a>

        <a href="#" className="hover:text-purple-400 transition">
          <Phone size={22} />
        </a>
      </div>

      <div className="mt-10 text-gray-400 text-sm">
        © 2026 | Built with  by <span className="text-white">Dhananjay</span>
      </div>

    </footer>
  );
}