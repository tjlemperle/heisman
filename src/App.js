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
      currentPlayer: {}
    }

    this.trainPlayer = this.trainPlayer.bind(this)
  }
  
  componentDidMount(){
    axios.get('http://localhost:3333/api/startingPlayer')
      .then(res => {
        this.setState({
          currentPlayer: res.data[0]
        })
        console.log(this.state.currentPlayer)
      })
  }

  trainPlayer(currentPlayer){
    axios.put('http://localhost:3333/api/trainPlayer', currentPlayer)
      .then(res => {
        this.setState({
        currentPlayer: res.data[0]
        })
      }
      )
  }

  render(){
    return (
      <div className="App">
        <Header />
        <CurrentPlayer {... this.state.currentPlayer} trainPlayer={this.trainPlayer}/>

      </div>
    );
  }
}

export default App;
