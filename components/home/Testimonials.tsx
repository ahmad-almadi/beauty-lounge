"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    content:
      "Absolutely love this place! The attention to detail and personalized service is unmatched. My skin has never looked better.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Emily Chen",
    role: "Bride",
    content:
      "They made me feel like a princess on my wedding day. The bridal package was perfect — makeup, hair, and nails all done flawlessly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Jessica Williams",
    role: "Beauty Enthusiast",
    content:
      "The ambiance is so relaxing and luxurious. Every visit feels like a mini vacation. The facial treatments are absolutely divine!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Aisha Al-Rashid",
    role: "VIP Member",
    content:
      "I've been coming here for over a year now and the quality never drops. Their hair treatments transformed my damaged hair completely.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Maria Garcia",
    role: "First-Time Visitor",
    content:
      "From the moment I walked in, I felt pampered. The staff is incredibly warm and professional. Already booked my next appointment!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Olivia Thompson",
    role: "Monthly Subscriber",
    content:
      "The monthly membership is worth every penny. I get my nails, lashes, and facials done here — always leave feeling like a queen.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 pink-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-gray-800">
            Client{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Love
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-pink-200/30 flex items-center justify-center text-pink-500 hover:bg-pink-50 hover:scale-110 transition-all duration-300 border border-pink-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-pink-200/30 flex items-center justify-center text-pink-500 hover:bg-pink-50 hover:scale-110 transition-all duration-300 border border-pink-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass-effect-strong rounded-3xl p-12 relative shadow-xl shadow-pink-200/20"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-pink-200" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 font-light leading-relaxed">
                  &ldquo;{testimonials[activeIndex].content}&rdquo;
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-pink-300 ring-offset-2">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-pink-500 font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "bg-gradient-to-r from-pink-500 to-rose-400 w-8"
                    : "bg-pink-200 hover:bg-pink-300 w-3"
                  }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
