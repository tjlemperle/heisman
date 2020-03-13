import React, {Component} from 'react';

export default class Favorites extends Component {
  render() {
    return <p>{this.props.favorite}</p>;
  }
}