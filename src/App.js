import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { heroesList } from './TypesAndDefaults';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: '',
      hero: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.changeHero = this.changeHero.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  changeHero(hero) {
    this.setState({ hero: hero });
  }

  render() {
    return (
      <div className="App picker">
        <div className="picker--portrait">
          <img src={logo} className="picker--portrait-dummy" alt="portrait" />
        </div>
        <div className="picker--hero-data">
          <ul className="picker--portrait--heroes-list">
            {heroesList.map((hero, index) =>
              <li key={index} className="heroes-list--item" onClick={() => {this.changeHero(hero)}}>
                <span className="heroes-list--item--age">{hero.age}</span>
                <span className="heroes-list--item--name">{hero.name}</span>
              </li>
            )}
          </ul>
        </div>
        <div className="picker--player-data">
          <input type="text" name="playerName" value={this.state.playerName} onChange={this.handleInputChange}/>
        </div>
      </div>
    );
  }
}

export default App;
