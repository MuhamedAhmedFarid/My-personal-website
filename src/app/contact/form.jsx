'use client';
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif mb-4">Let's Chat</h2>
            <p className="text-white/60">
              Have a project in mind? Fill in the form or send us an email.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/60">contact@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-white/60">Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500"
                placeholder="Project discussion"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-medium py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
