import React, {Component} from 'react'
import Badge from './Badge'
import './App.css'

class Form extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            badges : [],
            fName : '',
            lName : '',
            email : '',
            birthPlace : '',
            phone : '',
            favFood : '',
            about : '',
        }

        this.addBadge = this.addBadge.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.checkFormValues = this.checkFormValues.bind(this)
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value })
        if (this.checkFormValues())
            document.getElementById("submitButton").disabled = false
    }

    checkFormValues(){
        for (let i = 0; i < document.forms["badgeForm"].length - 1; i++){
            if (document.forms["badgeForm"][i].value === '')
            return false
        }
        return true
    }
    addBadge(event){
        event.preventDefault()
        const newBadge = {
            fName : this.state.fName,
            lName : this.state.lName,
            email : this.state.email,
            birthPlace : this.state.birthPlace,
            phone : this.state.phone,
            favFood : this.state.favFood,
            about : this.state.about
        }

        this.setState(prevState => {
            return {
                badges: [...prevState.badges, newBadge],
                fName : '',
                lName : '',
                email : '',
                birthPlace : '',
                phone : '',
                favFood : '',
                about : ''
            }
        })

        document.getElementById("badgeForm").reset()
        document.getElementById("submitButton").disabled = true
    }

    render() {
        const badges = this.state.badges.map((badge, index) => {
            return <Badge 
                key={index}
                badge={badge}
            />
        })
        return (
            <div className="container">
                <form className="badgeForm" onSubmit={this.addBadge}>
                    <input 
                        type="text" 
                        id="fName" 
                        name="fName" 
                        placeholder="First Name" 
                        minLength="3" 
                        value={this.state.fName} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        id="lName" 
                        name="lName" 
                        placeholder="Last Name" 
                        minLength="3" 
                        value={this.state.lName} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        minLength="3" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        id="birthPlace" 
                        name="birthPlace" 
                        placeholder="Place of Birth" 
                        minLength="3" 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        placeholder="Phone" 
                        pattern="[0-9\-]{3}[0-9\-]{3}[0-9\-]{4}" 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        id="favFood" 
                        name="favFood" 
                        placeholder="Favorite Food" 
                        minLength="3" 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="textarea" 
                        id="about" 
                        name="about" 
                        placeholder="Tell Us About Yourself" 
                        minLength="3" 
                        onChange={this.handleChange} 
                    />
                    <button id="submitButton" type="submit" disabled>Submit</button>
                </form>
                <div>
                    {badges}
                </div>
            </div>
        )
    }
}

export default Form