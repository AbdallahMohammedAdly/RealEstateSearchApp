import React from 'react';
import { Home, Bath, Ruler, DollarSign } from 'lucide-react';
import { Property } from '../types/Property';


interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <img 
        src={property.image} 
        alt={property.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
        <p className="text-gray-600 mt-1">{property.location.address}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-gray-700">
            <DollarSign className="w-5 h-5 mr-1" />
            <span className="font-semibold">{property.price.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-3 text-gray-600">
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span>{property.bedrooms} bd</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} ba</span>
          </div>
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-1" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;