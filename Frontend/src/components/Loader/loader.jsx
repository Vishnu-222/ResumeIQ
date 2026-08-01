import "./loader.scss";

const Loader = () => {
    return (
        <main className="loader-container">
            <div className="loader">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        </main>
    );
};

export default Loader;