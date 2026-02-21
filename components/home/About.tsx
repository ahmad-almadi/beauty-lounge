"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUsers, faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const features = [
  { icon: faAward, title: "Expert Team", description: "Certified professionals with years of experience" },
  { icon: faUsers, title: "Personalized Care", description: "Tailored treatments for your unique needs" },
  { icon: faClock, title: "Flexible Hours", description: "Open 7 days a week for your convenience" },
  { icon: faStar, title: "Premium Products", description: "Only the finest luxury beauty brands" },
];

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 pink-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-6 text-gray-800">
              Where Luxury Meets{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Luxe Beauty Lounge, we believe that beauty is an art form. Our team of skilled
              professionals is dedicated to bringing out your natural radiance through personalized
              treatments and premium products.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Step into our serene sanctuary where modern luxury meets timeless elegance.
              Every detail is designed to provide you with an unforgettable experience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-md shadow-pink-200/40">
                    <FontAwesomeIcon icon={feature.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-effect-strong p-8">
              <div className="aspect-square bg-gradient-to-br from-pink-100 via-pink-50 to-rose-50 rounded-2xl flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-50"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-effect-strong rounded-2xl p-6 shadow-lg shadow-pink-200/30"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-gray-600">Years</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-effect-strong rounded-2xl p-6 shadow-lg shadow-pink-200/30"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                5K+
              </div>
              <div className="text-sm text-gray-600">Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
