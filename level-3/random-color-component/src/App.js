import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: ""
    }
    this.updateColor = this.updateColor.bind(this)
  }
  updateColor(){
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(response =>{
      let getColor = '#' + response.data.new_color
      this.setState({color: getColor})
    })
      .then (() => {
        document.getElementById("container").style.backgroundColor = this.state.color
      })
  }

  render() {
    return (
      <div id="container" className="container">
        <p className="containerContents">Click to generate random color</p>
        <button onClick={this.updateColor} className="containerContents">Click Here</button>
      </div>
    )
  }
}

export default App;
