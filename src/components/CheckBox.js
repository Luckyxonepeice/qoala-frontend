import React from 'react';

export default function CheckBox({ selectedFilter, handleChange }) {
    return (
        <div className="app-container">
            {/* Filter Checkboxes */}
            <div className="filter-section">
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="complete"
                        checked={selectedFilter === 'complete'}
                        onChange={handleChange}
                    />
                    Complete
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="incomplete"
                        checked={selectedFilter === 'incomplete'}
                        onChange={handleChange}
                    />
                    Incomplete
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="wrongData"
                        checked={selectedFilter === 'wrongData'}
                        onChange={handleChange}
                    />
                    Wrong Data
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="prevCard"
                        checked={selectedFilter === 'prevCard'}
                        onChange={handleChange}
                    />
                    Previous Days
                </label>
            </div>
        </div>
    );
}
