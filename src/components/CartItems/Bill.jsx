import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import { checkout } from '../../store/checkoutSlice';

const Bill = ({ totalPrice, totalQuantity }) => {
    const dispatch = useDispatch();

    const clearCartHandler = () => {
        dispatch(clearCart());
    };

    const checkoutHandler = () => {
        dispatch(checkout());
    };

    return (
        <div className="card card-body text-left">
            <h5 className="text-center">Order Summary</h5>
            <hr />
            <p>Total Items</p>
            <h4>{totalQuantity}</h4>
            <p className="mt-3">Total Price</p>
            <h4>${totalPrice.toFixed(2)}</h4>
            <hr />
            <div className="text-right">
                <button className="btn btn-sm btn-secondary mr-3" onClick={clearCartHandler}>
                    Clear
                </button>
                <button className="btn btn-sm btn-primary" onClick={checkoutHandler}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Bill;
