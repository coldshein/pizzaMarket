import React, { FC, useState } from 'react';
import { setCategoryId } from '../redux/slices/filterSlice';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i:number) => void;
}

const Categories: React.FC<CategoriesProps> = ({value, onChangeCategory}) => {
  const categories = ['All', 'Meat', 'Vegeterian', 'Grilled', 'Spicy', 'Closed'];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => onChangeCategory(index)}
            key={item + index}
            className={value == index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
