import React, { useState } from 'react';
import { Leaf, MapPin, Phone, Mail, Send } from 'lucide-react';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';
import { useRecoilValue } from 'recoil';
import { CartItemCountAtom, SignInAtom } from '../atoms/UserAtom';

const ContactUs = () => {
  const cartItems = Number(useRecoilValue(CartItemCountAtom));
  const isSignedIn = useRecoilValue(SignInAtom);  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Navbar theme='dark' isSignedIn={isSignedIn} cartItems={cartItems} />
      {/* Header Section */}
      <div className="bg-green-600 mt-18 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl text-green-100">We'd love to hear from you. Let's grow together naturally!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Get In Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Have questions about our organic products or farming practices? 
                We're here to help! Reach out to us and let's discuss how we can 
                serve you with the freshest, most natural products.
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start mb-4">
                <MapPin className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Organic Farm Lane<br />
                    Green Valley, Countryside<br />
                    State 45678, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri: 8AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600">info@organicfarmland.com</p>
                  <p className="text-gray-600">support@organicfarmland.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-green-500">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us more about your enquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default ContactUs;
