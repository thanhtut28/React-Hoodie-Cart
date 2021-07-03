import CartItem from './CartItem';

const CartList = ({ cart }) => {
    return (
        <div className="card card-body border-0">
            {cart.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;
