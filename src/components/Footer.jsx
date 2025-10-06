import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import IeeeLogoWhite from "../assets/logos/IEEEWhite.png";

export const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Membership", href: "#membership" },
    { label: "Resources", href: "#resources" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const developers = [
    "Dilshan Karunarathna",
    "Dinith Navodya",
    "Jegatheesan Risikesan",
    "Senal  Galagedara",
    "Vehan Rajintha",
  ];

  const designers = ["Ruvindi Randeniya", "Amasha Prabuddi", "Hesara Perera"];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4 w-[355px]">
            <div className="flex items-center space-x-3">
              <img src={IeeeLogoWhite} alt="IEEE Logo" className="w-[305px]" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
            IEEE is the world’s largest professional association advancing innovation and technological excellence for the benefit of humanity.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-center text-sm text-gray-400">
          An initiative by the IEEE Computer Society Student Branch Chapter of SLIIT   
          </p>
          <p className="text-center text-sm text-gray-400">
            Lead By: <span className="text-gray-300">Heshan Gimhana</span>
          </p>
          <p className="text-center text-sm text-gray-400">
            Designed By:{" "}
            <span className="text-gray-300">{designers.join(", ")}</span>
          </p>
          <p className="text-center text-sm text-gray-400">
            Developed By:{" "}
            <span className="text-gray-300">{developers.join(", ")}</span>
          </p>
        </div>

      </div>
      <div className="border-t border-slate-800 p-4 mt-[-15px]">
          <p className="text-center text-sm text-gray-500">
            © 2025 IEEECS — All rights reserved
          </p>
        </div>
    </footer>
  );
};
