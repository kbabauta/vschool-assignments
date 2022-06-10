import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      inputs: []
    }
    this.updateInput = this.updateInput.bind(this)
  }

  handleChange = (event) =>{
    this.setState({
      input: event.target.value
    })
  }

  updateInput(event){
    event.preventDefault()
    let items = [...this.state.inputs]
    items.push(this.state.input)
    this.setState(prevState => ({inputs: [...prevState.inputs, prevState.input]}))
    document.getElementById("inputBox").value = ""
    this.setState({input: ""})
  }

  render() {
    const inputs = this.state.inputs.map(input => {
      return <ul>{input}</ul>
    })
  return (
  <div className="container">
    <form>
      <input 
        type="text"
        id="inputBox"
        name="input"
        placeholder="Enter Name"
        onChange={this.handleChange}
      />
      <br />
      <h1 id="currentInput">{this.state.input}</h1>
      <button className="button" onClick={this.updateInput}>Click Here</button>
      {inputs}
    </form>
  </div>
)
  
  }
}


export default App;
