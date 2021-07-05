import Products from '../components/Products/Products';

const Store = () => {
    return (
        <div className="container-fluid pt-5 ">
            <div className="text-center mt-5">
                <h2>Catalogue</h2>
                <p className="mb-5">Pick your favorite Hoodies.</p>
            </div>
            <Products />
        </div>
    );
};

export default Store;
