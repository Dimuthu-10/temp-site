const Home = () => {
    return ( 
        <div>
            <h1>This is a home page</h1>
            
            {/* Header bar including nav */}
            <div className="homepage_Header">
                <p>This is header</p>
            </div>

            {/* content */}
            <div className="homepage_body">
                <p>This is Body</p>
            </div>

            {/* Footer */}
            <div className="homepage_Footer">
                this is Footer
            </div>
        </div>
     );
}
 
export default Home;