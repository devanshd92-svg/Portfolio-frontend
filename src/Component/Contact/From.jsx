
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function From() {
  return (
    <div className="w-full flex justify-center items-center py-20 sm:justify-center">
      
      {/* Card */}
      <div className="relative w-[500px] max-w-[90%] rounded-2xl border border-white/10 
      bg-gradient-to-b from-[#140024] to-[#2a0a47] p-10 shadow-[0_0_60px_rgba(168,85,247,0.25)]">

       

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-8">
          You can reach me Anytime
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-5">
            <Input
              placeholder="Full Name"
              className="h-12 rounded-lg bg-transparent border border-white/20 text-white placeholder:text-gray-400"
            />

            <Input
              placeholder="Your Email"
              type="email"
              className="h-12 rounded-lg bg-transparent border border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="How can i help?"
            rows={6}
            className="w-full rounded-xl border border-white/20 bg-transparent 
            p-4 text-white placeholder:text-gray-400 resize-none 
            focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          {/* Button */}
          <Button
            className="w-full h-14 rounded-full text-lg 
            bg-gradient-to-r from-black to-[#020617] 
            hover:from-purple-900 hover:to-black
            border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            Submit
          </Button>

        </form>
      </div>
    </div>
  )
}

