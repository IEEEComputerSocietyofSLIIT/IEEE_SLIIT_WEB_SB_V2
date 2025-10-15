import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Email validation (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Phone number validation (Sri Lankan format)
    const phoneRegex = /^(?:\+94|0)(7\d{8})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid Sri Lankan phone number (e.g. +94719955200 or 0719955200)';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    console.log('Form submitted:', formData);
    alert('Message sent successfully!');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Get in Touch</h1>
          <p className="text-lg text-blue-100">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              IEEE Student Branch of SLIIT<br />
              Sri Lanka Institute of Information<br />
              Technology<br />
              New Kandy Road, Malabe
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Phone</h3>
            <a href="tel:+94719955200" className="text-blue-600 hover:underline">
              +94 71 995 5200
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Email</h3>
            <a href="mailto:sliit.ieee@gmail.com" className="text-blue-600 hover:underline">
              sliit.ieee@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
          <p className="text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.subject ? 'border-red-500' : 'border-gray-300 focus:ring-blue-600'
                }`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300 focus:ring-blue-600'
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center space-x-2"
              >
                <span>Send Message</span>
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
