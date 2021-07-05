import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="mt-5">{children}</main>
        </>
    );
};

export default Layout;
