"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Palette, Heart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, colors, and treatments tailored to your unique style and hair type.",
    color: "from-pink-400 to-pink-500",
    iconBg: "from-pink-400 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Skincare",
    description: "Rejuvenating facials and treatments for radiant, healthy skin.",
    color: "from-rose-300 to-pink-500",
    iconBg: "from-rose-400 to-pink-500",
  },
  {
    icon: Palette,
    title: "Makeup",
    description: "Professional makeup artistry for any occasion, from natural to glamorous.",
    color: "from-pink-300 to-rose-400",
    iconBg: "from-pink-400 to-rose-400",
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Holistic treatments to nurture your body, mind, and spirit.",
    color: "from-rose-300 to-pink-400",
    iconBg: "from-rose-400 to-pink-400",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 pink-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-gray-800">
            Our <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover our comprehensive range of premium beauty and wellness services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-effect-strong rounded-3xl p-6 sm:p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-pink-200/30">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-200/30`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <Link
                  href="/services"
                  className="inline-flex items-center text-pink-500 font-medium group-hover:gap-2 transition-all"
                >
                  Learn More
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
