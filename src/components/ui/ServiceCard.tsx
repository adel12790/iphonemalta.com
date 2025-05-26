import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  price,
  href,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="text-primary-600 h-7 w-7" />
      </div>
      <h3 className="text-lg font-heading font-semibold mb-2">{title}</h3>
      {price && (
        <p className="text-accent-600 font-semibold mb-2">Starting at {price}</p>
      )}
      <p className="text-gray-600 mb-4">{description}</p>
      <Button href={href} variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;