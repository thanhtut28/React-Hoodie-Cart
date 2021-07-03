import ProductItem from './ProductItem';
import classes from './ProductsList.module.css';

const ProductsList = ({ products }) => {
    return (
        <div className={`${classes.grid} mt-3`}>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
