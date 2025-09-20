import React, { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { sanityHelpers } from '../lib/sanity'

const Contact = ({ source = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sanityHelpers.submitForm({
        ...formData,
        source: source,
        formType: 'contact'
      })

      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#1A2E44] text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase text-brand-gold tracking-widest mb-2">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start?
            </h3>
            <p className="mb-8 text-gray-300">
              Fill out the form or contact us directly. Our team is ready to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} stroke="#C89B3F" strokeWidth={2} className="mr-3 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/uE6E5uuHJSo5diSV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 leading-relaxed"
                >
                  1st floor, No 58, Main Rd, opposite to families super market, Doddabidrakallu, Gangondanahalli, Bengaluru, Karnataka 560073
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} stroke="#C89B3F" strokeWidth={2} className="mr-3" />
                <a
                  href="tel:+918618415901"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 86184 15901
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} stroke="#C89B3F" strokeWidth={2} className="mr-3" />
                <a
                  href="mailto:guruhithaproperties@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  guruhithaproperties@gmail.com
                </a>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 pt-6 border-t border-gray-600">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/guruhitha_properties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors duration-200 group"
                  >
                    <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Guruhitha-Properties-and-Fintech/61564461780296/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors duration-200 group"
                  >
                    <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg text-brand-text">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold"
                ></textarea>
              </div>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-brand-gold text-white hover:bg-opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
