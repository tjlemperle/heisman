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
                <div className='money-container'>$ {money}</div>
                
                <div className='record-container'>
                    <div className="record-alltime">
                        <div>Wins: {wins}</div>
                        <div>Losses: {losses}</div>
                    </div>
                    <div className="record-current">

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Summary