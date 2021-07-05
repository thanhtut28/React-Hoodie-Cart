import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import { formSubmitAsync, undoCheckout } from '../../store/checkoutSlice';

const CheckoutForm = ({ cart }) => {
    const dispatch = useDispatch();

    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const cancelHandler = () => {
        dispatch(undoCheckout());
    };

    const formSubmitHandler = e => {
        e.preventDefault();

        const nameInput = nameRef.current.value;
        const phoneInput = phoneRef.current.value;
        const addressInput = addressRef.current.value;

        const formIsValid = nameInput && phoneInput && addressInput;

        if (!formIsValid) return;
        const user = { name: nameInput, phone: phoneInput, address: addressInput };

        dispatch(formSubmitAsync({ cart, user }));
        dispatch(clearCart());
    };

    return (
        <form className="card card-body my-5" onSubmit={formSubmitHandler}>
            <h5 className="text-center">Checkout</h5>
            <div className="form-group py-3">
                <label className="form-label" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    ref={nameRef}
                />
            </div>
            <div className="form-group py-3">
                <label className="form-label" htmlFor="phone">
                    Phone
                </label>
                <input
                    type="number"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    ref={phoneRef}
                />
            </div>
            <div className="form-group py-3">
                <label className="form-label" htmlFor="address">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter your address"
                    ref={addressRef}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
                Submit
            </button>
            <button className="btn btn-outline-primary mt-2" onClick={cancelHandler}>
                Cancel
            </button>
        </form>
    );
};

export default CheckoutForm;
