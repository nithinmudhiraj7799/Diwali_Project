import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const quotations = [
    "✨ Diwali is the festival of lights, joy, and togetherness! ✨",
    "🎇 Celebrate this Diwali with happiness, love, and sparkles all around! 🎇"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-purple-900 via--700 to-yellow-500 text-white relative overflow-hidden px-4 sm:px-8 py-10">

     {/* Fireworks Background */}
<div className="absolute inset-0 pointer-events-none">
  <div className="w-full h-full bg-[url('https://i.ibb.co/TrGhxv7/fireworks.gif')] bg-cover bg-center opacity-10 blur-sm"></div>
  <div className="absolute inset-0 bg-black/20"></div>
</div>


      {/* Navbar */}
      <motion.nav
        className="fixed top-3 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-green-500 via-yellow-400 to-purple-400 rounded-full shadow-2xl backdrop-blur-md py-2 px-6 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="mr-2 text-yellow-200 text-xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ✨
        </motion.span>
        <p className="text-lg sm:text-xl md:text-3xl font-extrabold text-white drop-shadow-lg whitespace-nowrap">
          Jai Bhavani Crackers

        </p>
        <motion.span
          className="ml-2 text-yellow-200 text-xl"
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          ✨
        </motion.span>
      </motion.nav>

      {/* Spacer for navbar */}
      <div className="h-20 sm:h-24"></div>

      {/* Elegant Quotations */}
      <div className="mt-6 sm:mt-8 z-10 max-w-3xl text-center flex flex-col gap-3 sm:gap-4">
        {quotations.map((quote, index) => (
          <motion.p
            key={index}
            className="text-base sm:text-lg md:text-xl font-semibold p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-md text-yellow-100 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            {quote}
          </motion.p>
        ))}
      </div>

      {/* Centered Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center z-10 w-full max-w-md sm:max-w-lg">
        {/* Explore Crackers Button */}
        <motion.button
          className="w-44 sm:w-48 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-extrabold rounded-3xl shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/products")}
        >
         <motion.span
            className="absolute inset-0 bg-gradient-to-r from-white/40 via-green-200 to-green-400 opacity-30 blur-xl animate-pulse"
          />
          <span className="relative z-10 text-center block animate-pulse"> Explore Crackers</span>
        </motion.button>

        {/* View Price List Button */}
        <motion.button
          className="w-44 sm:w-48 px-6 py-3 bg-gradient-to-r from-green-400 via-lime-400 to-emerald-500 text-black font-extrabold rounded-3xl shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/checkout")}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-white/40 via-green-200 to-green-400 opacity-30 blur-xl animate-pulse"
          />
          <span className="relative z-10 text-center block animate-pulse">📄 Full Price List</span>
        </motion.button>
      </div>

      {/* Footer */}
      <div className="mt-10 sm:mt-12 text-center text-sm sm:text-base opacity-90 z-10 mb-6">
        <p>📞 9502749310 | 6302296338</p>
        <p>© 2025 Jai Bhavani Crackers | Wishing You a Joyful Diwali!</p>
      </div>
    </div>
  );
};

export default Home;

