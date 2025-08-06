import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange, activeCount, completedCount }) => {
  const filters = [
    { key: 'all', label: 'All', count: activeCount + completedCount },
    { key: 'active', label: 'Active', count: activeCount },
    { key: 'completed', label: 'Completed', count: completedCount }
  ];

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;