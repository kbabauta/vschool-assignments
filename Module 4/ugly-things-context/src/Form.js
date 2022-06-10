import React, { Component } from "react"
import {UglyContextConsumer} from "./uglyContext"

class Form extends Component {
    state = {
        img: '',
        title: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form className="ui form">
                <UglyContextConsumer>
                    {({ addUgly }) => (
                        <div>
                            <input
                                type="text"
                                id="img"    
                                name="img"
                                placeholder="Image URL"
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                id="title"    
                                name="title"
                                placeholder="Title"
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                id="description"    
                                name="description"
                                placeholder="Describe the ugly thing"
                                onChange={this.handleChange}
                            />
                            <button onClick={(evt) => {
                                evt.preventDefault()
                                const ug = {
                                    img: this.state.img,
                                    title: this.state.title,
                                    description: this.state.description
                                }
                                addUgly(ug)
                            }}
                                id="submitButton"> Submit

                            </button>
                        </div>
                    )}

                </UglyContextConsumer>
            </form>
        )
    }
}

export default Form