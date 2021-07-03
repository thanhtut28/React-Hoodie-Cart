import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Link, useRouteMatch } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { url } = useRouteMatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="card card-body">
            <img src={product.photo} alt={product.title} className="img-fluid" />
            <p className="text-left">{product.title}</p>
            <h4>${product.price}</h4>

            <div className="text-right mt-2">
                <Link to={`${url}/${product.id}`}>More</Link>

                <button
                    type="submit"
                    className="btn btn-primary btn-sm ml-2"
                    onClick={addToCartHandler}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
