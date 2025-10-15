import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Plus, X } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'How can I become a member of IEEE SLIIT Student Branch?',
    a:
      'You can become a member by registering through the official IEEE membership portal and selecting your preferred membership type. Once you complete the application and payment process, your membership will be activated, and you\'ll gain access to exclusive resources, events, and networking opportunities. Click Here To Join'
  },
  {
    q: 'What events does the student branch organize?',
    a: 'We organize technical workshops, guest lectures, hackathons, and social mixers to help students learn and network.'
  },
  {
    q: 'How can I volunteer or help with events?',
    a: 'Get in touch via the contact form or email, and we\'ll add you to our volunteers list for upcoming events.'
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [successText, setSuccessText] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();
    if (!validateForm()) return;
    console.log('Form submitted:', formData);
    // show modern toast message instead of alert
    setSuccessText('Message sent successfully!');
    setSuccess(true);
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  // auto-hide success toast after a short delay
  React.useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 3500);
    return () => clearTimeout(t);
  }, [success]);

  return (
  <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0b64c7] to-[#0c62b8] text-white pt-8 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-4 sm:pt-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">Let's Get in Touch</h1>
            <p className="mt-2 sm:mt-3 text-center text-blue-100 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">Get in touch with us. We're here to help and answer any questions you might have.</p>
          </div>
        </div>
      </div>

      {/* Overlapping white container with rounded top */}
      <div className="-mt-12 sm:-mt-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <div className="bg-white rounded-t-3xl pt-6 sm:pt-10 pb-8 sm:pb-12 px-2 sm:px-6">
            {/* Info cards */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="bg-white rounded-xl shadow-contact-card p-5 sm:p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0b64c7] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">Address</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    IEEE Student Branch of SLIIT<br />
                    Sri Lanka Institute of Information<br />
                    Technology<br />
                    New Kandy Road, Malabe
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-contact-card p-5 sm:p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0b64c7] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">Phone</h3>
                  <a href="tel:+94719955200" className="text-[#0b64c7] hover:underline text-xs sm:text-base">+94 71 995 5200</a>
                </div>

                <div className="bg-white rounded-xl shadow-contact-card p-5 sm:p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0b64c7] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">Email</h3>
                  <a href="mailto:sliit.ieee@gmail.com" className="text-[#0b64c7] hover:underline text-xs sm:text-base">sliit.ieee@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send Us a Message */}
      <div className="bg-[#f3f7fb] py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Send Us a Message</h2>
            <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-contact-card p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.fullName ? 'border-red-400' : 'border-gray-200 focus:ring-[#0b64c7]'}`}
                />
                {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.email ? 'border-red-400' : 'border-gray-200 focus:ring-[#0b64c7]'}`}
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.subject ? 'border-red-400' : 'border-gray-200 focus:ring-[#0b64c7]'}`}
              />
              {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>}
            </div>

            <div className="mb-4 sm:mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 resize-none text-sm sm:text-base ${errors.message ? 'border-red-400' : 'border-gray-200 focus:ring-[#0b64c7]'}`}
              />
              {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="text-center">
              <button type="submit" className="inline-flex items-center space-x-2 bg-[#0b64c7] hover:bg-[#0a55ab] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-2 sm:px-6 py-8 sm:py-12">
        <h3 className="text-center text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Frequently Asked Questions</h3>
        <p className="text-center text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">Explore answers to the most common questions to make the most of your IEEE experience.</p>

        <div className="space-y-2 sm:space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="border rounded-md overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white"
              >
                <span className="text-gray-700 text-sm sm:text-base">{item.q}</span>
                <span className="text-[#0b64c7]">
                  {openFaq === idx ? <X size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {openFaq === idx && (
                <div className="px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 text-gray-700 text-xs sm:text-sm">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="bg-[#f3f7fb] py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 text-center mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold">Visit Our Campus</h4>
          <p className="text-gray-500 text-xs sm:text-base">Find us at SLIIT Malabe Campus</p>
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-6">
          <div className="rounded-xl overflow-hidden shadow-contact-card">
            <iframe
              title="SLIIT Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.81554168802!2d79.9461418153344!3d6.894875895014181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257874c7c0b7f%3A0x8c6d6b3e0a0e5b6a!2sSri%20Lanka%20Institute%20of%20Information%20Technology%2C%20Malabe!5e0!3m2!1sen!2slk!4v1697040000000"
              width="100%"
              height="220"
              className="min-h-[180px] sm:min-h-[340px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

  <div className="h-8 sm:h-12"></div>
      {/* Success toast */}
      <div aria-live="polite" className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6">
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {success && (
            <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{successText}</p>
                  <p className="mt-1 text-sm text-gray-500">We've received your message and will respond shortly.</p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button onClick={() => setSuccess(false)} className="inline-flex text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Close</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
