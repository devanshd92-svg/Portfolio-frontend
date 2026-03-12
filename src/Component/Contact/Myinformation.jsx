
import { useEffect, useState, useMemo } from "react";
import { Mail, Phone } from "lucide-react";

export default function Myinformation() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = "69a6a6f34cdee1ad61e1fca2";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/User/${userId}`);
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
      email: userData.email || "pcsatpals@gmail.com",
      phone: userData.phone || "78141-04770",
      role: "Developer",
    };
  }, [userData]);

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Loading contact info...
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-[70vh] bg-[#0b0016] text-white flex items-center px-10 lg:px-24">

      {/* left content */}
      <div className="max-w-xl space-y-8">

        <div>
          <h1 className="text-5xl font-semibold mb-3">Contact</h1>
          <p className="text-gray-400">
            Email, call or Complete the form.
          </p>
        </div>

        <p className="text-xl leading-relaxed">
          Let’s turn your concept into a successful commercial product together!
        </p>

        {/* email */}
        <div className="flex items-center gap-3 text-lg">
          <Mail size={20} />
          <span>{memoizedUser?.email}</span>
        </div>

        {/* phone */}
        <div className="flex items-center gap-3 text-lg">
          <Phone size={20} />
          <span>{memoizedUser?.phone}</span>
        </div>

      </div>

      

    </section>
  );
}

