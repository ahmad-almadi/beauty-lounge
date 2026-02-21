"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 glass-effect rounded-full"
          >
            <Sparkles className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">Premium Beauty Experience</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold">
            <span className="block bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <span className="block mt-2 text-gray-800">Natural Beauty</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury beauty treatments in a serene, modern environment.
            Where expertise meets elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/booking"
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full hover:shadow-2xl hover:shadow-pink-300/40 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="font-semibold">Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 glass-effect rounded-full hover:shadow-lg hover:shadow-pink-200/40 hover:scale-105 transition-all duration-300 font-semibold text-gray-700"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5000+", label: "Happy Clients" },
            { number: "50+", label: "Premium Services" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover-lift"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
