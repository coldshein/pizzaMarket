import React from 'react';

import Categories from "../components/Categories";
import Header from "../components/Header";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/SkeletonPizza";
import Sort from "../components/Sort";

const Home = () => {
    const [pizza, setPizza] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
   
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'rating',
        sortProp: 'rating',
    });
    console.log(categoryId)
    const order = sortType.sortProp.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProp.replace('-', '');
    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://634da70cf34e1ed8267b796c.mockapi.io/pizzas?${categoryId ? `category=${categoryId}` : null}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then((json) => {
                setPizza(json)
                setIsLoading(false);
            })
            .catch((err) => console.warn(err))
            window.scrollTo(0,0);
    }, [categoryId, sortType]);
    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} setCategory={(id) => setCategoryId(id)} />
                <Sort value={sortType} setSort={(item) => setSortType(item)}/>
            </div>
            <h2 className="content__title">All pizza</h2>
            <div className="content__items">
                {
                    isLoading ? (
                        [... new Array(6)].map((name, index) => <PizzaSkeleton key={index} />)
                    ) : (
                        pizza.map((item, index) =>
                            <PizzaBlock key={item + index} {...item} />)
                    )
                }

            </div>
        </>
    );
}

export default Home;