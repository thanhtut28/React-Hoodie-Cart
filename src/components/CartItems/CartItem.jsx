import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(addToCart(item));
    };

    const removeItemFromCartHandler = () => {
        dispatch(removeFromCart({ id: item.id }));
    };

    return (
        <div className="row no-gutters py-3">
            <div className="col-md-2 p-2">
                <img
                    src={item.photo}
                    alt={item.title}
                    style={{
                        maxWidth: '70px',
                        height: 'auto',
                        margin: '0 auto',
                    }}
                    className=" d-block mb-4 mb-md-0"
                />
            </div>
            <div className="col-md-4 p-2">
                <h5>{item.title}</h5>
                <p>${item.price}</p>
            </div>
            <div className="col-md-2 text-center p-2">Qty - {item.quantity}</div>
            <div className="col-md-4 p-2">
                <div className="text-right text-md-center">
                    <button
                        className="btn btn-sm btn-danger mr-2"
                        onClick={removeItemFromCartHandler}
                    >
                        -
                    </button>
                    <button className="btn btn-sm btn-primary ml-2" onClick={addItemToCartHandler}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
