import { connect } from 'react-redux';
import { ProductCard } from '../common';
import { useEffect } from 'react';
import { getProductsListFromFirebase } from '../../api/getProductsListFromFirebase';

const LeaderProductsView = ({ list, getList }) => {

    useEffect(() => {
        if (!list.length) getList();
        return
    })

    return (
        <>
            <div className="py-[10px] bg-black">
                <p className="container text-white text-xxl-size uppercase">Лидеры продаж</p>
            </div>
            <ul className="container grid-rows-1 md:grid-rows-2 lg:grid-rows-4">
                {list.map((product, index) => {
                    if (product.bestseller) return (
                        <li key={index} className="">
                            <ProductCard product={product} />
                        </li>
                    )
                    return null;
                })}
            </ul>
        </>
    )
}

const mapState = (state) => ({
    list: state.productList,
})

const mapDispatch = (dispatch) => ({
    getList: () => dispatch(getProductsListFromFirebase())
})

export const LeaderProducts = connect(mapState, mapDispatch)(LeaderProductsView);