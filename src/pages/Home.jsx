import HomeContent from '../components/Home/HomeContent';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <div className="pt-4">
            <div className="text-center mt-5">
                <h2>React-Shopping-Cart</h2>
                <p className="mb-5">The joy of dressing is an art.</p>
            </div>
            <HomeContent />
            <Footer />
        </div>
    );
};

export default Home;
