import React, {Component} from 'react'
import './CurrentPlayer.css'

class CurrentPlayer extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {name, rating, arm, speed, decisions} = this.props;
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
                        <span>Decisions: {decisions} </span>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CurrentPlayer