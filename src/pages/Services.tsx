import React from 'react';
import { 
  Smartphone, 
  Battery, 
  Droplets, 
  Settings, 
  Database, 
  Camera, 
  Wifi, 
  AlertCircle 
} from 'lucide-react';
import Button from '../components/ui/Button';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  timeEstimate: string;
  devices: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
  price,
  timeEstimate,
  devices,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 py-8">
      <div className="md:w-1/4 flex justify-center md:justify-start">
        <div className="rounded-full bg-primary-100 p-4 h-16 w-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Starting Price:</p>
            <p className="text-accent-600 font-semibold">{price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Time Estimate:</p>
            <p className="font-medium">{timeEstimate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Compatible Devices:</p>
            <p className="font-medium">{devices.join(', ')}</p>
          </div>
        </div>
        
        <Button href="/contact" variant="primary" size="sm">
          Get a Quote
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary-600" />,
      title: 'Screen Replacement',
      description: 'Expert screen replacement for cracked, broken, or unresponsive displays. We use high-quality OEM and aftermarket parts to restore your device to perfect working condition.',
      price: '$49 - $299',
      timeEstimate: '30-60 minutes',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <Battery className="h-8 w-8 text-primary-600" />,
      title: 'Battery Replacement',
      description: 'Restore your device\'s battery life with our professional battery replacement service. We use high-quality batteries that meet or exceed manufacturer specifications.',
      price: '$39 - $89',
      timeEstimate: '30-45 minutes',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <Droplets className="h-8 w-8 text-primary-600" />,
      title: 'Water Damage Repair',
      description: 'Our specialized water damage treatment can save your device from permanent damage. We\'ll disassemble, clean, and dry your device to prevent corrosion and restore functionality.',
      price: '$79 - $199',
      timeEstimate: '1-3 days',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      title: 'Software Issues',
      description: 'Fix crashes, freezes, and other software problems with our comprehensive software diagnostics and repair service. We can resolve most software issues without data loss.',
      price: '$29 - $79',
      timeEstimate: '30-90 minutes',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <Camera className="h-8 w-8 text-primary-600" />,
      title: 'Camera Repair',
      description: 'Resolve blurry photos, camera crashes, or physical camera damage with our camera repair service. We can replace camera modules and fix software-related camera issues.',
      price: '$59 - $129',
      timeEstimate: '45-60 minutes',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary-600" />,
      title: 'Charging Port Repair',
      description: 'Fix loose charging ports, charging issues, or broken connectors with our charging port repair service. We can replace the port or clean out debris causing connection problems.',
      price: '$49 - $89',
      timeEstimate: '30-60 minutes',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: 'Data Recovery',
      description: 'Our data recovery service can help retrieve important photos, contacts, and files from damaged devices. We use specialized tools to recover data even from severely damaged phones.',
      price: '$79 - $199',
      timeEstimate: '1-3 days',
      devices: ['iPhone', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-primary-600" />,
      title: 'Diagnostic Service',
      description: 'Not sure what\'s wrong with your device? Our comprehensive diagnostic service will identify all issues with your device and provide a detailed repair plan with transparent pricing.',
      price: '$19 (Waived with repair)',
      timeEstimate: '30 minutes',
      devices: ['All major brands'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Repair Services
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Professional repair services for all smartphone brands and models. Fast, reliable, and backed by our 90-day warranty.
            </p>
            <Button href="/contact" variant="accent" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                timeEstimate={service.timeEstimate}
                devices={service.devices}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Repair Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a systematic approach to ensure your device is fixed correctly the first time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Diagnosis</h3>
              <p className="text-gray-600">We thoroughly examine your device to identify all issues.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Quote</h3>
              <p className="text-gray-600">We provide a transparent quote with no hidden fees.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Repair</h3>
              <p className="text-gray-600">Our certified technicians complete the repair with quality parts.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">We thoroughly test your device before returning it to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Before & After
            </h2>
            <p className="text-xl text-gray-600">
              See the difference our professional repair service makes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/897776/pexels-photo-897776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Cracked iPhone screen" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Repaired iPhone screen" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold mb-1">iPhone Screen Replacement</h3>
                <p className="text-sm text-gray-600">Completed in 45 minutes</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/4526726/pexels-photo-4526726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Water damaged phone" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Repaired water damaged phone" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold mb-1">Water Damage Repair</h3>
                <p className="text-sm text-gray-600">Completed in 2 days</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Phone with battery issues" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Phone with new battery" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold mb-1">Battery Replacement</h3>
                <p className="text-sm text-gray-600">Completed in 30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-accent-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            Contact us today for a free quote and expert repair service.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;