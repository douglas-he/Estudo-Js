import React from 'react';
import './App.css';
class Doguitos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((result) => {
        this.setState(state => ({
          results: [...state.results, result.message],
        }));
      })
  }

  render() {
    return this.state.results.map(element => <img src={element} />)
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { results: '', click: 0}
  }
  render() {
    return (
      <div className="a">
        <button onClick={() => {this.setState(state => ({ click: state.click + 1}))}}>Exiba Doguinhos</button>
        {(this.state.click > 0) ? <Doguitos />:'Sem doguinhos'}
      </div>
    );
  }
}

export default App;
