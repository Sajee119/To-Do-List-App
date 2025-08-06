import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter.key}
          className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;