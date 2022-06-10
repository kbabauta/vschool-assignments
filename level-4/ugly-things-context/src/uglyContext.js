import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {
    state = {
        uglyList: [],
    }

    componentDidMount(){
        fetch('https://api.vschool.io/kevinbabauta/thing')
            .then(response => response.json())
            .then(
                data  => this.setState({uglyList: data})
            )
    }

    addUgly = (ugly) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: ugly.title,
                imgUrl: ugly.img,
                description: ugly.description
            })
        }
        fetch('https://api.vschool.io/kevinbabauta/thing/', requestOptions)
            .then(response => response.json())
            .then(() => window.location.reload())
    }

    deleteUgly = (uglyId) => {
        fetch('https://api.vschool.io/kevinbabauta/thing/' + uglyId, {method: 'DELETE'})
            .then(() => window.location.reload())
    }

    editUgly = (uglyId) => {
        console.log("looking at: ", uglyId)
        let [ug] = this.state.uglyList.filter((u) => {return u._id === uglyId})
        let title = prompt("Please enter new title", ug.title)
        let description = prompt ("Please enter a new description", ug.description)

        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                description: description
            })
        }

        fetch('https://api.vschool.io/kevinbabauta/thing/' + uglyId, requestOptions)
            .then(response => response.json())
            .then(() => window.location.reload())
    }

    render() {
        const {uglyList} = this.state
        return(
            <Provider value={{
                uglyList,
                addUgly: this.addUgly,
                deleteUgly: this.deleteUgly,
                editUgly: this.editUgly
            }}>
                {this.props.children}

            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}