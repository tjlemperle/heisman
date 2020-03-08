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
                <div className="name-container">{name}</div>
                <div className='photo-parent'>
                    <div className="photo-container">
                        <div className='player-photo'>Photo ID</div>
                    </div>
                    <div className='stats-container'>
                        <span>Rating: {overall}</span>
                        <span>Arm: {arm}</span>
                        <span>Speed: {speed}</span>
                        <span>Decisions: {decision} </span>
                    </div>
                    <button className='button' onClick={this.props.trainPlayer}>Train Player</button>
                    <button className='button' onClick={this.props.newPlayer}>New Player</button>
                </div>
                
            </div>
        )
    }
}

export default CurrentPlayer