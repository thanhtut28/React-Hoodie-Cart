import { BsChevronLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const Item = ({ product, onBackHandler, moveToStore }) => {
    const dispatch = useDispatch();

    const buyNowHandler = () => {
        dispatch(addToCart(product));
        moveToStore();
    };

    return (
        <div className="py-1">
            <h2 className="text-center py-3">Product Detail</h2>
            <div className="row no-gutters align-items-center">
                <div className="col-sm-6">
                    <img
                        src={product.photo}
                        alt={product.title}
                        className="img-fluid card card-body"
                    />
                </div>
                <div className="col-sm-6 text-center py-5">
                    <h3 className="p-2">{product.title}</h3>
                    <p className="p-2"> {product.price}USD</p>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-primary m-1" onClick={buyNowHandler}>
                            Buy Now
                        </button>
                        <button className="btn btn-secondary m-1" onClick={onBackHandler}>
                            <BsChevronLeft />
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
