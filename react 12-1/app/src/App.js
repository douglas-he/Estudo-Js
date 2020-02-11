import React from 'react';
import './App.css';
class Button extends React.Componenet{
  render(){
  return (<button onClick={()=> {this.props.Alterabutton(this.props.text)}}  >{this.props.text}</button>)
  }
}
function App() {
class Alterabutton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }
}
setNameButton = (text) => {
  this.setState({text})
}

  return (
    <div className="App">
      <Button Alterabutton={this.setNameButton} text='1' />
    </div>
  );
}

export default App;
