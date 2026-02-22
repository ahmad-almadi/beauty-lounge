"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Palette, Heart, Droplet, Flower2 } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    icon: Scissors,
    title: "Hair Services",
    color: "from-primary-400 to-primary-600",
    services: [
      { name: "Haircut & Styling", price: "$65+", duration: "60 min" },
      { name: "Hair Coloring", price: "$120+", duration: "120 min" },
      { name: "Balayage & Highlights", price: "$180+", duration: "180 min" },
      { name: "Hair Treatment", price: "$85+", duration: "45 min" },
    ],
  },
  {
    icon: Sparkles,
    title: "Skincare",
    color: "from-lilac-400 to-lilac-600",
    services: [
      { name: "Classic Facial", price: "$95", duration: "60 min" },
      { name: "Anti-Aging Treatment", price: "$145", duration: "75 min" },
      { name: "Deep Cleansing", price: "$110", duration: "60 min" },
      { name: "Hydration Therapy", price: "$125", duration: "60 min" },
    ],
  },
  {
    icon: Palette,
    title: "Makeup",
    color: "from-primary-300 to-lilac-500",
    services: [
      { name: "Bridal Makeup", price: "$250+", duration: "120 min" },
      { name: "Special Event", price: "$150", duration: "90 min" },
      { name: "Natural Glam", price: "$95", duration: "60 min" },
      { name: "Makeup Lesson", price: "$120", duration: "90 min" },
    ],
  },
  {
    icon: Droplet,
    title: "Nail Care",
    color: "from-cream-400 to-primary-400",
    services: [
      { name: "Manicure", price: "$45", duration: "45 min" },
      { name: "Pedicure", price: "$65", duration: "60 min" },
      { name: "Gel Nails", price: "$75", duration: "60 min" },
      { name: "Nail Art", price: "$85+", duration: "75 min" },
    ],
  },
  {
    icon: Flower2,
    title: "Body Treatments",
    color: "from-lilac-300 to-primary-500",
    services: [
      { name: "Body Massage", price: "$110", duration: "60 min" },
      { name: "Body Scrub", price: "$95", duration: "45 min" },
      { name: "Body Wrap", price: "$135", duration: "75 min" },
      { name: "Aromatherapy", price: "$125", duration: "60 min" },
    ],
  },
  {
    icon: Heart,
    title: "Wellness Packages",
    color: "from-primary-400 to-lilac-400",
    services: [
      { name: "Bride Package", price: "$450", duration: "4 hours" },
      { name: "Spa Day", price: "$350", duration: "3 hours" },
      { name: "Mother's Day Special", price: "$280", duration: "2.5 hours" },
      { name: "Couples Retreat", price: "$500", duration: "3 hours" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary-500 to-lilac-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Indulge in our comprehensive range of premium beauty and wellness services, 
              each designed to enhance your natural radiance and leave you feeling refreshed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium">{service.name}</h4>
                        <span className="text-primary-600 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-lilac-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              Book Your Service
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
