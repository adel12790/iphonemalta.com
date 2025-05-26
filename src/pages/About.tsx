import React from 'react';
import { Award, PenTool as Tool, Calendar, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import TeamMemberCard from '../components/ui/TeamMemberCard';

const About = () => {
  const teamMembers = [
    {
      name: 'Michael Roberts',
      role: 'Founder & Lead Technician',
      bio: 'With over 10 years of experience in mobile device repair, Michael founded I-Phone to provide fast, reliable repairs at fair prices. He specializes in microsoldering and board-level repairs.',
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      certifications: [
        'Apple Certified Technician',
        'Samsung Certified Repair Expert',
        'Microsolder Certification',
      ],
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Repair Technician',
      bio: 'Sarah has 7 years of experience specializing in data recovery and liquid damage repair. Her attention to detail and problem-solving skills make her an essential part of our technical team.',
      imageUrl: 'https://images.pexels.com/photos/3714513/pexels-photo-3714513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      certifications: [
        'Data Recovery Specialist',
        'Google Certified Repair Expert',
        'Advanced Troubleshooting Certification',
      ],
    },
    {
      name: 'David Washington',
      role: 'Repair Technician',
      bio: 'David specializes in screen replacements and battery services. With 5 years in the industry, he\'s known for his speed and precision, ensuring your device is repaired correctly the first time.',
      imageUrl: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      certifications: [
        'Certified Phone Technician',
        'Battery Safety Certification',
        'Display Repair Specialist',
      ],
    },
    {
      name: 'Jessica Martinez',
      role: 'Customer Service Manager',
      bio: 'Jessica ensures every customer receives exceptional service from start to finish. She manages our front desk operations and helps customers understand their repair options.',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      certifications: [
        'Customer Service Excellence',
        'Technical Communication Certification',
        'Inventory Management',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About I-Phone Mobile Repair
            </h1>
            <p className="text-xl text-gray-100">
              We're a team of certified technicians dedicated to providing fast, reliable, and affordable mobile device repair services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I-Phone Mobile Repair was founded in 2015 with a simple mission: to provide high-quality mobile device repairs with exceptional customer service, transparent pricing, and quick turnaround times.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small repair shop has grown into a trusted name in mobile device repair, serving thousands of satisfied customers. Our success comes from our unwavering commitment to quality workmanship, honest service, and putting our customers first.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to grow and evolve with the latest repair technologies and techniques, ensuring we can service even the newest devices with the same level of expertise and care that built our reputation.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4473394/pexels-photo-4473394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our repair shop"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                8+
              </h3>
              <p className="text-gray-600">Years in Business</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Tool className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                15,000+
              </h3>
              <p className="text-gray-600">Devices Repaired</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                30 Min
              </h3>
              <p className="text-gray-600">Average Repair Time</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                98%
              </h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600">
              At I-Phone, we're guided by a set of core principles that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide fast, reliable, and affordable mobile device repairs while delivering exceptional customer service and technical expertise that exceeds expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted mobile device repair service, known for our technical excellence, customer satisfaction, and commitment to extending the life of electronic devices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. From the parts we use to the technicians we hire, excellence is our standard. We stand behind our work with a 90-day warranty.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear communication and no surprises. Our pricing is straightforward, and we'll always explain exactly what's wrong with your device and how we plan to fix it.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs, respect your time, and work hard to make the repair process as smooth and convenient as possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4">Environmental Responsibility</h3>
              <p className="text-gray-600">
                By repairing devices instead of replacing them, we help reduce electronic waste. We also recycle all components properly to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Our certified technicians have years of experience fixing all types of mobile devices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                certifications={member.certifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">
              We're proud of our technical expertise and industry credentials.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 font-bold text-xl">A+</span>
              </div>
              <h3 className="font-heading font-semibold">Apple Certified</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 font-bold text-xl">S+</span>
              </div>
              <h3 className="font-heading font-semibold">Samsung Certified</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 font-bold text-xl">G+</span>
              </div>
              <h3 className="font-heading font-semibold">Google Certified</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 font-bold text-xl">MS</span>
              </div>
              <h3 className="font-heading font-semibold">Microsoldering</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Experience the I-Phone Difference?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Bring your device to our expert team for fast, reliable repairs and exceptional service.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;