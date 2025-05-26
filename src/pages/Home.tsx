import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Battery, 
  Droplets, 
  Settings, 
  Clock, 
  Award, 
  Shield, 
  DollarSign, 
  ChevronRight 
} from 'lucide-react';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const Home = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Screen Repair',
      description: 'Fast, high-quality screen replacement for all major smartphone brands.',
      price: '$49',
      href: '/services',
    },
    {
      icon: Battery,
      title: 'Battery Replacement',
      description: 'Restore your device\'s battery life with our premium replacement service.',
      price: '$39',
      href: '/services',
    },
    {
      icon: Droplets,
      title: 'Water Damage',
      description: 'Professional water damage diagnosis and repair to save your device.',
      price: '$79',
      href: '/services',
    },
    {
      icon: Settings,
      title: 'Software Issues',
      description: 'Resolve system crashes, software errors, and performance problems.',
      price: '$29',
      href: '/services',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      testimonial: 'They fixed my cracked iPhone screen in just 30 minutes! Excellent service and reasonable price.',
      device: 'iPhone 13',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      testimonial: 'My Samsung had severe water damage, but they managed to recover all my data and fix the phone. Can\'t thank them enough!',
      device: 'Samsung Galaxy S22',
    },
    {
      name: 'Jessica Williams',
      rating: 4,
      testimonial: 'Professional service with transparent pricing. My battery life is back to normal after their replacement service.',
      device: 'Google Pixel 6',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-accent-400 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
                Same Day Repairs Available!
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
                Professional Phone Repair You Can Trust
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Fast, affordable repairs for all smartphone brands. Back up and running in no time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="accent" size="lg">
                  Get Quote Now
                </Button>
                <Button href="/services" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  View Our Services
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Phone Repair Technician" 
                className="rounded-lg shadow-2xl max-w-full animate-slide-up"
              />
            </div>
          </div>
        </div>
        
        {/* Brand Logos */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-center text-sm font-medium uppercase tracking-wider mb-6">
              We repair all major brands
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="font-heading font-bold text-xl">iPhone</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-xl">Samsung</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-xl">Google</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-xl">OnePlus</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-xl">Xiaomi</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-xl">Huawei</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Repair Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional repair services for all types of smartphone issues. Fast, reliable, and affordable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                href={service.href}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/services" variant="primary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6803503/pexels-photo-6803503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Technician repairing phone"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Why Choose I-Phone?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience and thousands of successful repairs, we're committed to providing the highest quality service for your valuable devices.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Fast Turnaround</h3>
                    <p className="text-gray-600">Most repairs completed same-day, often while you wait.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Award className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Certified Technicians</h3>
                    <p className="text-gray-600">Our experts are certified and have years of experience.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary-100 rounded-full p-3">
                      <Shield className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">90-Day Warranty</h3>
                    <p className="text-gray-600">All our repairs come with a 90-day parts and labor warranty.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary-100 rounded-full p-3">
                      <DollarSign className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">Quality repairs at fair prices, with no hidden fees.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button href="/about" variant="primary">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Repair Section */}
      <section className="py-16 bg-accent-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Need an Emergency Repair?
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            We offer same-day emergency repair services for critical situations. Contact us now for immediate assistance.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Hear from our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                device={testimonial.device}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
              <span>View More Reviews</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Don't wait until it's too late. Contact us today to get your device fixed by our expert technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Browse Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;