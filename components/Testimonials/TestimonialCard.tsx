import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  quote, 
  image 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mx-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <Quote className="h-8 w-8 text-teal-100 mb-4" />
          <blockquote className="text-slate-700 italic mb-6">
            "{quote}"
          </blockquote>
          <div>
            <p className="font-bold text-slate-900">{name}</p>
            <p className="text-slate-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;