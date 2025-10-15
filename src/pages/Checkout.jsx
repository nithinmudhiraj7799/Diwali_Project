import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // 🔸 Crackers grouped by category
  const categories = [
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
        { name: "Flower Pot Small", price: 120 },
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
        { name: "2000 Wala", price: 1520 },
        { name: "5000 Wala", price: 1300 },
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-500 p-6 text-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎇 JAI BHAVANI CRACKERS - WHOLESALE PRICES
      </motion.h1>

      {categories.map((cat, idx) => (
        <motion.div
          key={idx}
          className="bg-white/20 backdrop-blur-md p-5 rounded-xl mb-10 shadow-lg border border-white/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            {cat.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/40">
                  <th className="py-2">No.</th>
                  <th>Product Name</th>
                  <th>Wholesale Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {cat.items.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/20 hover:bg-white/10 transition"
                  >
                    <td className="py-2">{i + 1}</td>
                    <td>{item.name}</td>
                    <td className="font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}

      {/* Contact Info */}
      <div className="text-center mt-10 opacity-90">
        <p className="font-semibold text-lg">
          📞 9502749310 | 6302296338
        </p>
        <p>All Types of Crackers Available - Wholesale</p>
        <p className="mt-2">Light Up Your Diwali with Joy & Sparkle! ✨</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-110 transition-transform"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;