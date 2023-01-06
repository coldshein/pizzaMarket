import React, { useState } from 'react';
import { setCategoryId } from '../redux/slices/filterSlice';

const Categories = ({value, onChangeCategory}) => {
  const categories = ['All', 'Meat', 'Vegeterian', 'Grilled', 'Spicy', 'Closed'];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => onChangeCategory(index)}
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
