import React, {Component} from 'react'
import './Summary.css'

class Summary extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {name, overall, arm, speed, decision} = this.props;
        return(
            <div className="player-container">

                
            </div>
        )
    }
}

export default Summary