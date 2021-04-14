import React from "react"

function About() {
    return(
        <div className="about" style={{
                backgroundImage:`url("https://images.unsplash.com/photo-1542013936693-884638332954?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")`
            }} >
            <div>
                <h1 className="aboutTitle" name="aboutText">About Us</h1>
                    <p className="aboutText" name="aboutText">If you want prices that stomp the competition then you've come to the right place. Here at Mario's Plumbing Solutions, we take pride in quality over quantity. We pride ourselves with excellent customer service and support and treat all clients like family. For all your plumbing services and tools, we're here to give you solutions with no shortcuts!</p>
            </div>

        </div>
    )
}

export default About