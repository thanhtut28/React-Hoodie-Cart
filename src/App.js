import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/store" exact>
                    <Store />
                </Route>
                <Route path="/store/:productId">
                    <ProductDetail />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
