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
                <Route path="/" exact component={Home} />

                <Route path="/store" exact component={Store} />

                <Route path="/store/:productId" component={ProductDetail} />

                <Route path="/cart" component={Cart} />

                <Route path="*" component={NotFound} />
            </Switch>
        </Layout>
    );
}

export default App;
