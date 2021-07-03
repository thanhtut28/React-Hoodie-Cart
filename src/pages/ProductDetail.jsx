import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Item from '../components/Products/Item';

const ProductDetail = () => {
    const { productId } = useParams();
    const { goBack, push } = useHistory();

    const moveToStoreHandler = () => {
        push('/store');
    };

    const product = useSelector(state => state.products.find(p => p.id === productId));

    return <Item product={product} onBackHandler={goBack} moveToStore={moveToStoreHandler} />;
};

export default ProductDetail;
