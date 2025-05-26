import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  certifications?: string[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  imageUrl,
  certifications = [],
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-gray-900">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        {certifications.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Certifications:</h4>
            <ul className="space-y-1">
              {certifications.map((cert, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;