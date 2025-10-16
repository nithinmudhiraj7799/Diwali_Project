import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Shots",
      items: [
        { name: "12 Shots", price: 250 },
        { name: "30 Shots", price: 550 },
        { name: "60 Shots", price: 1050 },
        { name: "2 in 1", price: 280 },
        { name: "3 in 1", price: 400 },
      ],
    },
    {
      title: "Walas",
      items: [
        { name: "100 Wala", price: 50 },
        { name: "200 Wala", price: 90 },
        { name: "1000 Wala", price: 200 },
        { name: "2000 Wala", price: 360 },
        { name: "Beed Bomb", price: 175 },
        { name: "Pop Pop", price: 250 },
        { name: "7 No Renu Bomb", price: 50 },
      ],
    },
    {
      title: "Flowerpots",
      items: [
        { name: "Flowerpot", price: 75 },
        { name: "Flowerpot Small", price: 120 },
        { name: "Flowerpot Special", price: 130 },
        { name: "35mm Tub", price: 90 },
        { name: "50mm Tub", price: 180 },
        { name: "Best Choice", price: 150 },
        { name: "Colour Koti Small", price: 180 },
        { name: "Colour Koti Medium", price: 200 },
        { name: "Colour Koti Large Deluxe", price: 330 },
      ],
    },
    {
      title: "Rockets & Others",
      items: [
        { name: "Baby Rocket", price: 50 },
        { name: "3 Sound Rocket", price: 145 },
        { name: "Lunik", price: 120 },
        { name: "2 Sound Rocket", price: 135 },
        { name: "Tiger Bomb", price: 350 },
        { name: "Commando", price: 85 },
        { name: "Cheeta", price: 180 },
      ],
    },
    {
      title: "Loud Bombs",
      items: [
        { name: "GCGD", price: 130 },
        { name: "Rocket Bomb", price: 80 },
        { name: "Bird", price: 15 },
        { name: "Hero", price: 75 },
        { name: "Hanuman", price: 60 },
        { name: "28 Cursor", price: 17 },
        { name: "28 Giant", price: 35 },
        { name: "R1 Tnp", price: 80 },
        { name: "Saddam", price: 90 },
        { name: "Hip Hop", price: 40 },
        { name: "Tin Tin", price: 35 },
        { name: "24DG", price: 55 },
        { name: "Ground Chekkar Big", price: 135 },
        { name: "GC 10 Items", price: 50 },
        { name: "GC", price: 140 },
        { name: "GC Special", price: 80 },
        { name: "Bird Laxmi 3½", price: 17 },
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        { name: "Photo Flash", price: 125 },
        { name: "Pencil Once More", price: 80 },
        { name: "Silver Rain", price: 110 },
        { name: "½ Twinkle Star", price: 30 },
        { name: "4 Twinkle", price: 85 },
        { name: "7cm", price: 10 },
        { name: "15cm", price: 48 },
        { name: "30cm", price: 58 },
        { name: "Ring", price: 900 },
        { name: "Monoraj", price: 360 },
        { name: "Selfie Stick", price: 250 },
        { name: "Match Box", price: 130 },
        { name: "Butterfly", price: 150 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-500 via-orange-400 to-green-400 p-5 sm:p-8 md:p-10 text-gray-900">
      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎇 JAI BHAVANI CRACKERS 🎆
      </motion.p>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-5 sm:p-7 rounded-3xl shadow-xl border border-orange-200 hover:shadow-2xl hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-600 border-b-2 border-orange-300 pb-2">
              {cat.title}
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-orange-100 text-orange-800 border-b border-orange-200">
                    <th className="py-2 px-3 sm:px-4 text-left">No.</th>
                    <th className="px-3 sm:px-4 text-left">Product Name</th>
                    <th className="px-3 sm:px-4 text-right">
                      Wholesale Price (₹)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-orange-100 hover:bg-orange-50 transition-colors"
                    >
                      <td className="py-2 px-3 sm:px-4 text-gray-700">{i + 1}</td>
                      <td className="px-3 sm:px-4 font-medium text-gray-800">
                        {item.name}
                      </td>
                      <td className="px-3 sm:px-4 text-right font-semibold text-green-700">
                        ₹{item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
         {/* Wholesale Note */}
      <div className="max-w-6xl mx-auto mt-6 p-4 bg-blue-100 text-yellow-900 rounded-2xl text-center font-semibold shadow-md">
        ⚠️ Note: Wholesale prices are applicable only for purchases of ₹5000 and above.
      </div>

        {/* Footer with Location */}
      <div className="text-center mt-14 text-white">
        <p className="font-semibold text-lg sm:text-xl">
          📞 9502749310 | 6302296338
        </p>
        <p className="text-sm sm:text-base">
          All Types of Crackers Available — Wholesale & Retail
        </p>
        <p className="mt-1 text-sm sm:text-base">
          📍 Near ZPHS School, Patloor
        </p>
        <p className="text-sm sm:text-base">
          🏡 Village: <span className="font-semibold">Patloor</span> | Mandal:{" "}
          <span className="font-semibold">Marpally</span> | District:{" "}
          <span className="font-semibold">Vikarabad</span>
        </p>
        <p className="mt-2 italic opacity-90">
          💥 Light Up Your Diwali with Happiness, Safety & Sparkle! 💫
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-white text-orange-600 font-bold px-6 sm:px-8 py-3 rounded-2xl shadow-lg hover:bg-orange-600 hover:text-white transition-all"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;
