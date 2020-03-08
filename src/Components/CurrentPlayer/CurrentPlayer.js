import React, {Component} from 'react'
import './CurrentPlayer.css'

class CurrentPlayer extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {name, rating, arm, speed, decision} = this.props;
        return(
            <div className="player-container">
                <div className="name-container">{name}</div>
                <div className='photo-parent'>
                    <div className="photo-container">
                        <div className='player-photo'>Photo ID</div>
                    </div>
                    <div className='stats-container'>
                        <span>Rating: {rating}</span>
                        <span>Arm: {arm}</span>
                        <span>Speed: {speed}</span>
                        <span>Decisions: {decision} </span>
                    </div>
                    <button className='button' onClick={this.trainPlayer}>Train Player</button>
                </div>
                
            </div>
        )
    }
}

export default CurrentPlayer