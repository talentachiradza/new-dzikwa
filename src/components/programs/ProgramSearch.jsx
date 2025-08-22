import React from 'react';
import { Search } from 'lucide-react';

const ProgramSearch = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="max-w-xl mx-auto mb-16">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search for programs (e.g., 'Education', 'Health')"
          className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary-custom"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default ProgramSearch;