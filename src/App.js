import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tile } from './tile/Tile';

class App extends Component {

  generateTiles(limit) {
    const tiles = [];
    for (let i = 0; i < limit; i++) {
      tiles.push(<Tile />);
    }
    return tiles;
  }
  render() {
    return (
      <div>
        {this.generateTiles(8)}
      </div>
    );
  }
}

export default App;
