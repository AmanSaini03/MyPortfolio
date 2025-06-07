import React from 'react';
import { Globe } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Globe className="w-8 h-8 text-blue-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
        SiteBuddy
      </span>
    </div>
  );
};

export default Logo;