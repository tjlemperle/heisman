import React, {Component} from 'react';
import './App.css';
import './Components/Header/Header.css'
import axios from 'axios'
import CurrentPlayer from './Components/CurrentPlayer/CurrentPlayer'
import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';

class App extends Component{
  constructor(){
    super()

    this.state ={
      currentPlayer: {},
      newPlayer: [],
      summary: {
        wins: 0,
        losses: 0,
        money: 0
      }
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

  newPlayer = (currentPlayer) => {
    axios.post('http://localhost:3333/api/newPlayer', currentPlayer)
      .then(res => {
        this.setState({
        currentPlayer: res.data[0]
        })
      }
      )
  }

  play = (currentPlayer, summary) => {
    axios.post('http://localhost:3333/api/play', currentPlayer)
      .then(res => {
        this.setState({
        summary: res.data
        })
      }
      )
  }

  render(){
    return (
      <div className="App">
        <Header />
        <CurrentPlayer 
        {... this.state.currentPlayer} 
        trainPlayer={this.trainPlayer} 
        newPlayer={this.newPlayer}
        />
        <Summary 
        {... this.state.summary}
        play={this.play}
        />

      </div>
    );
  }
}

export default App;
