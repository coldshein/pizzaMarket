import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/cartSlice";

type PizzaBlockProps ={
  id: string;
  imageUrl: string;
  title: string;
  sizes: number[]; 
  types: number[];
  price: number;  

}
const PizzaBlock: React.FC<PizzaBlockProps> = ({id, imageUrl, title, types, sizes, price}) => {

  const dispatch = useDispatch();
  const typeNames = ['thin', 'traditional'];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const cartItem = useSelector((state:any) => state.cart.items.find((obj:any) => obj.id === id ));
  const addedCount = cartItem ? cartItem.count : 0;
  const handleSize = (index:any) => {
    setActiveSize(index)
  }
  const handleType = (index:any) => {
    setActiveType(index)
  }

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      type: typeNames[activeType],
      size: sizes[activeSize],
      imageUrl,
    }
    dispatch(addProduct(item));
  }
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {
            types.map((item, index) => (
              <li onClick={() => handleType(index)} className={activeType == index ? 'active' : ''} key={item + index}>{typeNames[index]}</li>
            ))
          }
        </ul>
        <ul>
          {
            sizes.map((item,index) => (
              <li onClick={() => handleSize(index)} className={activeSize == index ? 'active' : ''} key={item + index}>{item}</li>
            ))
          }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price} ₴</div>
        <div className="button button--outline button--add"
        onClick={onClickAdd}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {addedCount ? <i>{addedCount}</i> : null}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PizzaBlock;
