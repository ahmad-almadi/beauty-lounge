import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pink-section-alt border-t border-pink-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent mb-4">
              Luxe Beauty
            </h3>
            <p className="text-gray-600 mb-4">
              Experience luxury beauty treatments in a serene, modern environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-600 hover:text-pink-500 transition-colors">Services</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-pink-500 transition-colors">Our Team</Link></li>
              <li><Link href="/booking" className="text-gray-600 hover:text-pink-500 transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Hair Styling</li>
              <li className="text-gray-600">Skincare</li>
              <li className="text-gray-600">Makeup</li>
              <li className="text-gray-600">Nail Care</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-pink-400" />
                <span>123 Beauty Street, Luxury District</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0 text-pink-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-5 h-5 flex-shrink-0 text-pink-400" />
                <span>hello@luxebeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-100 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luxe Beauty Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
