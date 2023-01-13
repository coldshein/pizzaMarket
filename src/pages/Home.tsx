import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/SkeletonPizza";
import { Sort, list } from "../components/Sort";


import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

import Pagination from '../components/Pagination';


const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { items, status } = useSelector((state: any) => state.pizza);
    const { categoryId, sort, currentPage, searchValue } = useSelector((state: any) => state.filter);

    const onChangeCategory = (id:number) => {
        dispatch(setCategoryId(id));
    }
    const onChangePage = (num: number) => {
        dispatch(setCurrentPage(num))
    }

    // async action (pizzaSlice)
    const getPizzas = async () => {
        const order = sort.sortProp.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.sortProp.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : null;
        const search = searchValue ? `search=${searchValue}` : null;
        dispatch(
            // @ts-ignore
            fetchPizzas({
            order,
            sortBy,
            category,
            search,
            currentPage,
        }))
        window.scrollTo(0, 0);
    }
    React.useEffect(() => {
        getPizzas();
    }, [categoryId, sort.sortProp, searchValue, currentPage]);

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = list.find((obj) => obj.sortProp === params.sortProp);
            dispatch(
                setFilters({
                    ...params, 
                    sort,
                })
            )
        }
    }, [])

    React.useEffect(() => {

    }, [categoryId, sort.sortProp, searchValue, currentPage])

    React.useEffect(() => {
        const queryString = qs.stringify({
            sortProp: sort.sortProp,
            categoryId,
            currentPage,
        })
        navigate(`?${queryString}`)
    }, [categoryId, sort.sortProp, searchValue, currentPage])

    const pizzas = items.map((item: any, index: any) => <Link to={`/pizza/${item.id}`} key={item.title + index} ><PizzaBlock  {...item} /></Link>)
    const skeletons = [... new Array(4)].map((name, index) => <PizzaSkeleton key={index} />)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id:number) => onChangeCategory(id)} />
                <Sort />
            </div>
            <h2 className="content__title">{
                searchValue.length > 0 ? `Searching for ${searchValue}` : 'All pizzas'
            }</h2>
            {
                status === 'error' ? (
                    <div className="content__error-info">
                        <h2>Oops...</h2>
                        <p>Unfortunantly, failed to get a pizza.. You can try again later!</p>
                    </div>
                ) : (
                    <div className="content__items">
                        {
                            status === 'loading' ? skeletons : pizzas
                        }
                    </div>
                )
            }

            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    );
}

export default Home;