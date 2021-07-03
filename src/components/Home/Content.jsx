const Content = ({ content, nth }) => {
    return (
        <div
            className={`row no-gutters align-items-center pt-sm-5 ${
                nth % 2 === 1 ? 'flex-row-reverse' : ''
            }`}
            key={content.id}
        >
            <div className="col-sm-5">
                <img src={content.photo} alt={content.title} className="img-fluid" />
            </div>
            <div className="col-sm-7 p-5 ">
                <h1 className="text-center">{content.title}</h1>
            </div>
        </div>
    );
};

export default Content;
