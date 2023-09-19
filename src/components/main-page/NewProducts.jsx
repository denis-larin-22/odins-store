import { getFromPublic } from "../../_utils/getFromPublic";
import { ProductCard } from "../common";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getProductsListFromFirebase } from "../../api/getProductsListFromFirebase";


export const NewProductsView = ({ list, getList }) => {
    const imgNewSignPath = getFromPublic('/assets/common/new-sign.svg');

    //Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = () => ({
        transform: isInView ? "none" : `translateY(400px)`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease"
    })

    useEffect(() => {
        if (list.length === 0) getList();
        return
    })

    return (
        <>
            <div className="py-[10px] bg-black">
                <div className="container flex flex-wrap items-center justify-center sm:justify-start text-white gap-x-[40px]">
                    <h2 className="text-mob-xxl-size md:text-xxl-size uppercase">Новинки</h2>
                    <img src={imgNewSignPath} alt="NEW" className="w-[58px] md:w-fit" />
                </div>
            </div>
            <section className="container py-[40px]">
                <motion.ul
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px]"
                >
                    {list.slice(0, 6).map((product) => {
                        if (!product.newProduct) return null;
                        return (
                            <motion.li key={product.id} style={getInView()}>
                                <ProductCard height="500px" product={product} />
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </section >

        </>
    )
}

const mapState = (state) => ({
    list: state.productList,
})

const mapDispatch = (dispatch) => ({
    getList: () => dispatch(getProductsListFromFirebase())
})

export const NewProducts = connect(mapState, mapDispatch)(NewProductsView)