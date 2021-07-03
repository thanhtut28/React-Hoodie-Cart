import { useSelector } from 'react-redux';
import CartList from './CartList';
import Bill from './Bill';
import CheckoutForm from '../checkout/CheckoutForm';

const CartContainer = () => {
    const { items: cart, totalQuantity, totalPrice } = useSelector(state => state.cart);

    const { isCheckouted, formIsSubmitted } = useSelector(state => state.checkout);

    let content;

    if (!isCheckouted && cart.length > 0)
        content = (
            <div className="row no-gutters justify-content-center">
                <div className="col-lg-8 p-3">
                    <CartList cart={cart} />
                </div>
                <div className="col-lg-4 p-3 mt-5">
                    <Bill totalPrice={totalPrice} totalQuantity={totalQuantity} />
                </div>
            </div>
        );

    if (!isCheckouted && cart.length === 0) {
        content = <p className="text-center m-5">Your Bag is empty.</p>;
    }

    if (isCheckouted) {
        content = <CheckoutForm cart={cart} />;
    }

    if (formIsSubmitted) {
        content = <p className="text-center text-success m-5">You've orderd successfully.</p>;
    }

    return <div className="container">{content}</div>;
};

export default CartContainer;
