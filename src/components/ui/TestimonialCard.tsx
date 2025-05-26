import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  testimonial: string;
  device: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  testimonial,
  device,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-700 font-medium text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{device}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic flex-grow">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;