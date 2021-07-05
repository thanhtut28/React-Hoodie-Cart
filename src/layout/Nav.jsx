import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBag } from 'react-icons/bs';
import classes from './Nav.module.css';

const Nav = () => {
    const { totalQuantity } = useSelector(state => state.cart);

    return (
        <header className={classes.sticky}>
            <nav className="navbar navbar-light bg-secondary">
                <div className="container-fluid d-flex justify-content-around align-items-center">
                    <Link className=" p-1" to="/">
                        Home
                    </Link>
                    <Link className="p-1" to="/store">
                        Catalogue
                    </Link>
                    <Link
                        className={`p-1 d-flex justify-content-center align-items-center ${classes.icon}`}
                        to="/cart"
                    >
                        <BsBag />
                        <span className={`${classes.iconNum}`}>{totalQuantity}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
