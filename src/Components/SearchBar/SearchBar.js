import React, {Component} from 'react';
import '../../array'
import './SearchBar.css'
import Favorites from './Favorites'


class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            favoriteList: [{}]
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(value){
        this.setState({
            message: value
        })
    }


    render(){
        let list = this.state.list.map((element, index) => {
            return <Favorites key={index} favorite={element} />;
        });
        return(
           <div>
               <div className='search-container'>
               <h1>Favorites</h1>
                <div className='bars-container'>                    
                    <input classname='search-bar' onChange={e => this.handleChange(e.target.value)} type="text" placeholder='Name'/>
                    <input classname='search-bar' onChange={e => this.handleChange(e.target.value)} type="text" placeholder='Rating'/>                 
                    <button className='button' onClick={this.handleAddTask()}>Save</button>
                </div>
                <p>{this.state.message}</p>
                </div>
                <Favorites />
           </div> 
        )
    }
}

export default SearchBar