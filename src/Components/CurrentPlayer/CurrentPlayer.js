import React, {Component} from 'react'
import './CurrentPlayer.css'

class CurrentPlayer extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {name, overall, arm, speed, decision} = this.props;
        return(
            <div className="player-container">
                <div className="name-container">
                    <h1>{name}</h1>
                </div>
                <div className='info-parent'>
                    <div className="photo-container">
                        <div className='player-photo'>
                            <span>{name}</span>
                        </div>
                    </div>
                    <div className='stats-container'>
                        <h1>Rating: {overall}</h1>
                        <span>Arm: {arm}</span>
                        <span>Speed: {speed}</span>
                        <span>Decisions: {decision} </span>
                    </div>     
                </div>
                    <div className='buttons-container'>
                        <button className='button' onClick={this.props.play}>Play</button>
                        <button className='button' onClick={this.props.trainPlayer}>Train Player - $5</button>
                        <button className='button' onClick={this.props.newPlayer}>New Player - $50</button>
                    </div>
                
            </div>
        )
    }
}

export default CurrentPlayer