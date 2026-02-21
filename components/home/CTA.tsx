"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 pink-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-xl shadow-pink-200/20"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-200/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 mb-8 shadow-lg shadow-pink-300/40"
            >
              <FontAwesomeIcon icon={faCalendar} className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-6 text-gray-800">
              Ready to Transform Your Look?
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Book your appointment today and experience the luxury you deserve.
              Our expert team is ready to bring out your natural beauty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full hover:shadow-2xl hover:shadow-pink-300/40 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="font-semibold">Book Your Appointment</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 glass-effect rounded-full hover:shadow-lg hover:shadow-pink-200/30 hover:scale-105 transition-all duration-300 font-semibold text-gray-700 border border-pink-200/50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
