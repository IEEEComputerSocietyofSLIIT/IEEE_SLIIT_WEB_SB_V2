import React from 'react'
import Logos from '../assets/logos'
import IEEEWhite from '../assets/logos/IEEEWhite.png'

export const Footer = () => {
  return (
    <footer className="bg-[#0f1720] text-[#c9d1d9]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
              <div className="flex items-start space-x-3">
              <img src={IEEEWhite} alt="sliit ieee white logo" className="w-36 h-auto logo-footer" />
            </div>
            <p className="mt-6 text-sm text-[#9aa3ad] max-w-xs leading-relaxed">
              IEEE is the world's largest professional association advancing innovation and technological excellence for the benefit of humanity.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#98a4ad]">
              <li>About Us</li>
              <li>Events</li>
              <li>Membership</li>
              <li>Resources</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#101823] flex items-center justify-center shadow-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.5 19.5H4.5V9h3v10.5zM6 7.5C5.172 7.5 4.5 6.828 4.5 6s.672-1.5 1.5-1.5S9 5.172 9 6 6.828 7.5 6 7.5zM20.5 19.5h-3V14c0-1.657-1.343-3-3-3s-3 1.343-3 3v5.5h-3V9h3v1.5c.919-1.2 2.448-2.5 5.5-2.5 3.5 0 4 2.5 4 5.5V19.5z" fill="#cbd5df"/>
                </svg>
              </a>

              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#101823] flex items-center justify-center shadow-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="#cbd5df" strokeWidth="1.2" fill="none"/>
                  <circle cx="12" cy="12" r="3" stroke="#cbd5df" strokeWidth="1.2" fill="none"/>
                  <circle cx="18" cy="6" r="0.8" fill="#cbd5df" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#101823] flex items-center justify-center shadow-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.898V12h1.54V9.797c0-1.522.9-2.368 2.285-2.368.662 0 1.356.118 1.356.118v1.49h-.764c-.754 0-.988.468-.988.948V12h1.68l-.268 2.89h-1.412v6.988C18.343 21.128 22 16.991 22 12z" fill="#cbd5df"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#15202b] pt-6">
            <p className="text-center text-sm text-[#9aa3ad] max-w-3xl mx-auto">An initiative by the IEEE Computer Society Student Branch Chapter of SLIIT
            <br />
            <span className="block mt-2 text-[#b5bec6]">Lead By : Hesham Gimhana</span>
            <span className="block text-[#98a4ad] mt-2">Designed By :  Ruvindi Randeniya, Amasha Prabuddi & Hesara Perera</span>
            <span className="block text-[#98a4ad]">Developed By :  Jegatheesan Risiakesan , Senal Galagedara , <a href="https://www.linkedin.com/in/vehanrajintha" target="_blank" rel="noopener noreferrer" className="text-[#b5bec6] hover:text-white">Vehaan Rajintha</a>, Dinith Navodya, Dilshan Karunaratna</span>
          </p>
        </div>
      </div>

      <div className="border-t border-[#0b1116]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-xs text-[#76808a]">© 2025 IEEE Computer Society Chapter of SLIIT — All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
