import React, {Component} from 'react'
import './CurrentPlayer.css'

class CurrentPlayer extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className="player-container">
                <div className="name-container">John Elway</div>
                <div className='photo-parent'>
                    <div className="photo-container">
                        <div className='player-photo'>Photo ID</div>
                    </div>
                    <div className='stats-container'>
                        <span>Rating: </span>
                        <span>Arm: </span>
                        <span>Speed: </span>
                        <span>Decisions: </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentPlayer