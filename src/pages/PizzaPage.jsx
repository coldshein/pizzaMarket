import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PizzaPage = () => {
    const { id } = useParams();
    const [pizza, setPizza] = React.useState({});

    React.useEffect(() => {
        const fullPizza = async () => {
            try {
                const { data } = await axios.get(`https://634da70cf34e1ed8267b796c.mockapi.io/pizzas/` + id);
                setPizza(data);
            } catch (error) {
                alert('Failed to load a pizza... Try again');
            }

        }
        fullPizza();
    }, [])
    if (!pizza) {
        return "Loading..."
    }
    return (
        <div className="full-pizza">
            <img src={pizza.imageUrl} alt="" />
            <div className="pizza-description">
                <h1>{pizza.title}</h1>
                <span>from {pizza.price} ₴</span>
                <Link to="/" className='button button--black'>Go back</Link>
            </div>
            
        </div>
    );
}

export default PizzaPage;
