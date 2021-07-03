import { useSelector } from 'react-redux';
import ProductsList from './ProductsList';

const Products = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="container mb-3 mb-md-5">
            <form className="form-group mt-2">
                <input type="text" className="form-control" placeholder="Search Products" />
            </form>
            <h5 className="mt-3 mt-md-4 mb-2">{products.length} products</h5>
            <ProductsList products={products} />
        </div>
    );
};

export default Products;
