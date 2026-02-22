"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Sophia Martinez",
    role: "Master Stylist & Colorist",
    specialty: "Hair Transformation Specialist",
    experience: "12 years",
    bio: "Sophia brings artistry and precision to every cut and color, specializing in balayage and modern styling techniques.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Emma Thompson",
    role: "Lead Esthetician",
    specialty: "Skincare Expert",
    experience: "10 years",
    bio: "Emma's holistic approach to skincare combines advanced treatments with natural wellness for radiant results.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Isabella Chen",
    role: "Makeup Artist",
    specialty: "Bridal & Special Events",
    experience: "8 years",
    bio: "Isabella creates stunning looks that enhance natural beauty, from soft and romantic to bold and glamorous.",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },
  {
    name: "Olivia Johnson",
    role: "Nail Technician",
    specialty: "Nail Art & Design",
    experience: "7 years",
    bio: "Olivia's creative nail designs and meticulous attention to detail make every manicure a work of art.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Ava Williams",
    role: "Massage Therapist",
    specialty: "Wellness & Relaxation",
    experience: "9 years",
    bio: "Ava's therapeutic touch and calming presence create a truly rejuvenating spa experience.",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    name: "Mia Rodriguez",
    role: "Beauty Consultant",
    specialty: "Personalized Beauty Plans",
    experience: "6 years",
    bio: "Mia helps clients discover their perfect beauty routine with expert product recommendations and styling advice.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

export default function TeamPage() {
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
              Meet Our <span className="bg-gradient-to-r from-primary-500 to-lilac-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our talented team of beauty professionals is dedicated to making you look and feel your absolute best.
              Each member brings unique expertise and a passion for excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-6 sm:p-8 h-full hover:shadow-2xl transition-shadow duration-200">
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-effect rounded-full px-4 py-2">
                      <span className="text-sm font-medium text-primary-600">{member.experience}</span>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.specialty}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>

                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-200"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
