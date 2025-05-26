import React from 'react';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              Have a question or need a repair? We're here to help! Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 1-2 business hours. For urgent repairs, please call us directly.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-100 rounded-full p-3">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Repair Street, Tech City, TC 12345</p>
                    <p className="text-gray-600 mt-1">
                      <a href="https://maps.google.com" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">
                        Get Directions →
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:5551234567" className="text-primary-600 hover:text-primary-700 underline">
                        Call Us Now →
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@I-Phonerepair.com</p>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:contact@I-Phonerepair.com" className="text-primary-600 hover:text-primary-700 underline">
                        Email Us →
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Clock className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading font-semibold mb-1">Business Hours</h3>
                    <div className="text-gray-600">
                      <div className="grid grid-cols-2 gap-2">
                        <div>Monday - Friday:</div>
                        <div>9:00 AM - 7:00 PM</div>
                        <div>Saturday:</div>
                        <div>10:00 AM - 5:00 PM</div>
                        <div>Sunday:</div>
                        <div>Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Car className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading font-semibold mb-1">Parking</h3>
                    <p className="text-gray-600">Free parking available behind our building and street parking in front.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-heading font-semibold mb-3">Emergency Repairs</h3>
                <p className="text-gray-600 mb-4">
                  Need an urgent repair? Call our emergency line for same-day service when available.
                </p>
                <div className="text-center">
                  <a
                    href="tel:5551234567"
                    className="inline-flex items-center justify-center bg-accent-400 text-gray-800 hover:bg-accent-500 transition-colors py-2 px-4 rounded-md font-medium"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    <span>(555) 123-4567</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Request a Repair Quote
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              We're conveniently located in the heart of Tech City.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full">
              {/* This is a placeholder for a map. In a real application, you would integrate Google Maps or another mapping service here */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">I-Phone Mobile Repair</h3>
                  <p className="text-gray-600">123 Repair Street, Tech City, TC 12345</p>
                  <a 
                    href="https://maps.google.com" 
                    className="inline-block mt-4 text-primary-600 hover:text-primary-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">How long do repairs typically take?</h3>
                <p className="text-gray-600">
                  Most common repairs like screen replacements and battery swaps take 30-60 minutes. More complex repairs might take a few hours or days, depending on the issue and parts availability.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">Do I need an appointment?</h3>
                <p className="text-gray-600">
                  Walk-ins are welcome, but appointments are recommended for faster service. You can schedule an appointment by phone or through our contact form.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">What's covered by your warranty?</h3>
                <p className="text-gray-600">
                  All our repairs come with a 90-day warranty covering parts and labor. If the same issue recurs within this period, we'll fix it free of charge.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">Do you offer data recovery services?</h3>
                <p className="text-gray-600">
                  Yes, we provide data recovery services for phones with software issues or physical damage. Success rates vary depending on the extent of damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;