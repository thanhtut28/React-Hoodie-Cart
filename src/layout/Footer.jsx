import { BsCodeSlash } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="px-3 py-5 bg-primary text-light">
            <div className="row no-gutters text-center">
                <div className="col-4">THA</div>
                <div className="col-4">React&copy;2020</div>
                <div className="col-4">
                    <a
                        href="https://github.com/thanhtut28/React-Hoodie-Cart/tree/main"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsCodeSlash className="text-light" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
