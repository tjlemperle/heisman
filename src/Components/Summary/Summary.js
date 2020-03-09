import React, {Component} from 'react'
import './Summary.css'

class Summary extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {wins, losses, money} = this.props;
        return(
            
            <div className="player-container">
                <div className='money-container'>$ {this.props.money}</div>
                <div className='record-container'>
                    <div>Wins: {this.props.wins}</div>
                    <div>Losses: {this.props.losses}</div>
                </div>
                
            </div>
        )
    }
}

export default Summary