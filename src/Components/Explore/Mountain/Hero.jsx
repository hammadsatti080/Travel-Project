import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://up.yimg.com/ib/th/id/OIP.S16MwWFznloeMQVbOE-bugHaEp?pid=Api&rs=1&c=1&qlt=95&w=154&h=96",
  "https://up.yimg.com/ib/th/id/OIP.Ov63B4VttLwGW5OzypemIQHaE8?pid=Api&rs=1&c=1&qlt=95&w=181&h=120",
  "https://up.yimg.com/ib/th/id/OIP.X9DMgCrFWDDdw2x-td_LrAHaEK?pid=Api&rs=1&c=1&qlt=95&w=215&h=120",
  "https://up.yimg.com/ib/th/id/OIP.KSknNXVy-3t_fvHpKBHbWgHaEK?pid=Api&rs=1&c=1&qlt=95&w=215&h=120",
  "https://up.yimg.com/ib/th/id/OIP.IHcAWjCq8n6ITHQcL0l-gQHaEo?pid=Api&rs=1&c=1&qlt=95&w=184&h=115",
  "https://up.yimg.com/ib/th/id/OIP.Z5iajfFKkXp6d_z6beMYqQHaE6?pid=Api&rs=1&c=1&qlt=95&w=145&h=96"
];

const Hero = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-16 left-12 w-56 h-56 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-30"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-12 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-30"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Glassy Header */}
      <motion.div
        className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl px-10 py-8 shadow-xl mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-md tracking-tight">
          🏔️ Mountain Moments
        </h1>
        <p className="text-gray-700 text-lg font-medium max-w-xl mx-auto">
          Explore elevated serenity — modern landscapes with a touch of motion.
        </p>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative rounded-3xl shadow-2xl group cursor-pointer bg-white/10 backdrop-blur-sm overflow-hidden"
            whileHover={{
              scale: 1.1,
              rotateY: 6,
              rotateX: 4,
              boxShadow: "0 25px 40px rgba(0,0,0,0.25)",
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={src}
              alt={`Mountain ${i + 1}`}
              className="w-full h-80 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
              <motion.span
                className="text-white text-xl font-semibold tracking-wide drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Mountain {i + 1}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        className="mt-16 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Built with ✨ Framer Motion & Tailwind — immersive 3D experience 🌄
      </motion.p>
    </section>
  );
};

export default Hero;
