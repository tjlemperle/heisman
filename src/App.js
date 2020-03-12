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
        document.title= 'Celebrity Death Match'
        this.setState({
          currentPlayer: res.data[0]
        })
        console.log(this.state.currentPlayer)
      })
  }

  trainPlayer = () => {
    axios.put('http://localhost:3333/api/trainPlayer', this.state)
      .then(res => {
        this.setState({
        currentPlayer: res.data.currentPlayer[0],
        summary: {wins: this.state.summary.wins, losses: this.state.summary.losses, money: res.data.money}
        })
      }
      )
  }

  newPlayer = () => {

    axios.post('http://localhost:3333/api/newPlayer', this.state)
      .then(res => {
        console.log(res)
        this.setState({
        currentPlayer: res.data.currentPlayer[0],
        summary: {wins: this.state.summary.wins, losses: this.state.summary.losses, money: res.data.money}
        })
      }
      )
  }



  play = () => {
    // console.log("this is the play funciton", currentPlayer)
    axios.post('http://localhost:3333/api/play', this.state)
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
        <div className='boxes'>
          <CurrentPlayer 
          {... this.state.currentPlayer} 
          trainPlayer={this.trainPlayer} 
          newPlayer={this.newPlayer}
          play={this.play}
          />
          <Summary 
          {... this.state.summary}
          />
        </div>
      </div>
    );
  }
}

export default App;
