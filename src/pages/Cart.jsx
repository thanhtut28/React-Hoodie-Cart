import CartContainer from '../components/CartItems/CartContainer';

const Cart = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="text-center mt-5">
                <h2>Cart</h2>
            </div>
            <CartContainer />
        </div>
    );
};

export default Cart;
