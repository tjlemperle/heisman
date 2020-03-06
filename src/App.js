import React, {Component} from 'react';
import './App.css';
import './Components/Header/Header.css'
import axios from 'axios'
import CurrentPlayer from './Components/CurrentPlayer/CurrentPlayer'
import Header from './Components/Header/Header';

class App extends Component{
  constructor(){
    super()

    this.state ={
      // currentPlayer: 
    }
  }
  
  componentDidMount(){
    axios.get('http://localhost:3333/api/startingPlayer')
      .then(res => {
        this.setState({
          currentPlayer: res.data
        })
      })
      console.log(this.currentPlayer)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <CurrentPlayer />
      </div>
    );
  }
}

export default App;
