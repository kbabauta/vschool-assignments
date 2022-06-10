import React from "react"
import Search from "./Search/Search"

function Home() {
    return(
        <div className="home">
            <section className="banner">
                <div className="container banner-container">
                    <div className="banner-element">
                        <div className="banner-text">
                            <h1>Find games at the best prices</h1>
                            <Search/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home