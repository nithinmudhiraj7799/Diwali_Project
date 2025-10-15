import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const categories = [
      {
      title: "Shots / Rockets (Youth / Adults)",
      items: [
        { name: "Baby Rocket", price: 60 },
        { name: "3 Sound Rocket", price: 190 },
        { name: "Lunik Rocket", price: 160 },
        { name: "Two Sound Rocket", price: 170 },
        { name: "2 in 1 Shot", price: 360 },
        { name: "3 in 1 Shot", price: 560 },
        { name: "12 Shots", price: 240 },
        { name: "30 Shots", price: 750 },
        { name: "60 Shots", price: 1500 },
        { name: "100 Wala", price: 60 },
        { name: "200 Wala", price: 120 },
        { name: "1000 Wala", price: 260 },
        { name: "2000 Wala", price: 520 },
        { name: "5000 Wala", price: 1300 },
      ],
    },
    {
      title: "Standard Crackers",
      items: [
        { name: "GCGD", price: 160 },
        { name: "Rocket Bomb", price: 100 },
        { name: "Bird", price: 370 },
        { name: "Hero", price: 90 },
        { name: "Hanuman", price: 800 },
        { name: "28 Cursor", price: 20 },
        { name: "28 Giant", price: 36 },
        { name: "Commando", price: 120 },
        { name: "Cheetah", price: 260 },
        { name: "R1T Noponu (20 items)", price: 790 },
        { name: "Saddam", price: 120 },
        { name: "doH d!H", price: 50 },
        { name: "Tin Tin", price: 40 },
        { name: "24 DG", price: 480 },
        { name: "GC (Ground Chakra) Big 25 pcs", price: 150 },
        { name: "GC Big 10 pcs", price: 760 },
        { name: "GC", price: 160 },
        { name: "GC SPC", price: 100 },
      ],
    },
    {
      title: "Laxmi Crackers",
      items: [
        { name: "3Y2 Laxmi", price: 20 },
        { name: "4 Inch Laxmi", price: 280 },
        { name: "4 Inch DG Laxmi", price: 500 },
      ],
    },
    {
      title: "Flower Pots (FP)",
      items: [
        { name: "Flower Pot Big", price: 100 },
        { name: "Flower Pot ", price: 120 },
        { name: "Flower Pot Special", price: 160 },
      ],
    },
    {
      title: "Tubes, Cursors & Giant Crackers",
      items: [
        { name: "35 mm Tube", price: 120 },
        { name: "50 mm Tube", price: 220 },
      ],
    },
    {
      title: "Sparklers, Colour Koti & Showers (Children)",
      items: [
        { name: "Best Choice", price: 180 },
        { name: "Colour Koti Small", price: 240 },
        { name: "Colour Koti Medium", price: 280 },
        { name: "Colour Koti Large", price: 500 },
        { name: "Photo Flash", price: 140 },
        { name: "Pencil Once More", price: 90 },
        { name: "Silver Rain", price: 130 },
        { name: "Twinkle Star", price: 40 },
        { name: "Electric Sparkles 7 cm", price: 16 },
        { name: "Electric Sparkles 15 cm", price: 56 },
        { name: "Electric Sparkles 30 cm", price: 56 },
      ],
    },
  
    {
      title: "Bombs / Loud Crackers",
      items: [
        { name: "Beed Bomb", price: 210 },
        { name: "1280L (Loud)", price: 240 },
        { name: "Pop Pop 5000", price: 10000 },
      ],
    },
    {
      title: "Guns / Roll / Miscellaneous",
      items: [
        { name: "Gun (Small)", price: 70 },
        { name: "Gun (Sound Type)", price: 28 },
        { name: "Gun (28)", price: 56 },
        { name: "Gun (Big Type)", price: 720 },
        { name: "Gun", price: 360 },
        { name: "Roll Caps", price: 110 },
        { name: "Robin", price: 110 },
        { name: "Match Box", price: 160 },
        { name: "Butterfly", price: 160 },
        { name: "Ring", price: 1200 },
        { name: "Manoraj", price: 480 },
        { name: "Selfie Stick", price: 300 },
        { name: "7 No Renu Bomb", price: 60 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4 sm:p-6 text-gray-900">
      <motion.p
        className="text-3xl sm:text-4xl font-extrabold text-center mb-8 drop-shadow-lg text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎆 JAI BHAVANI CRACKERS 🎆
        <p className="text-xl font-semibold text-red-200 mt-1">
          Wholesale Price List 2025
        </p>
      </motion.p>

      {categories.map((cat, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-4 sm:p-6 rounded-2xl mb-8 shadow-xl border border-yellow-400 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-purple-700">
            {cat.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-gray-300 text-purple-600">
                  <th className="py-2 w-10">No.</th>
                  <th>Product Name</th>
                  <th className="text-right pr-2">Wholesale (₹)</th>
                </tr>
              </thead>
              <tbody>
                {cat.items.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-purple-100 transition-all"
                  >
                    <td className="py-2 text-gray-800">{i + 1}</td>
                    <td className="text-gray-900 font-medium">{item.name}</td>
                    <td className="text-right font-semibold text-green-600">
                      ₹{item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}

      <div className="text-center mt-10 text-yellow-100">
        <p className="font-semibold text-lg sm:text-xl text-yellow-300">
          📞 9502749310 | 6302296338
        </p>
        <p>All Types of Crackers Available - Wholesale & Retail</p>
        <p className="mt-1 text-yellow-200 font-medium">
          Light Up Your Diwali with Joy & Sparkle! ✨
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;
