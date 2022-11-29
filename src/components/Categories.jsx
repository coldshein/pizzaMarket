import React, { useState } from 'react';

const Categories = ({value, setCategory}) => {
  const categories = ['All', 'Meat', 'Vegeterian', 'Grilled', 'Spicy', 'Closed'];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => setCategory(index)}
            key={item + index}
            className={value == index ? 'active' : null}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
