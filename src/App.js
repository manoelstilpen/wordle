import React from 'react';
import { Game } from './components/game/Game';
import { Home } from './components/home/Home';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: null,
    }
  }

  render() {

    if (this.state.word !== null) {
      return (
        <div className='App'>
          <Game word={this.state.word} />
        </div>
      )
    } 
    
    return (<Home onClick={(word) => {
      if (word === null || word.length !== 5) {
        return;
      }

      this.setState({word: word.toLowerCase()});
    }} />);
  }
}

export default App;

/**
 * TODO:
 * - Tela inicial para escolher a palavra
 * - Tela final com animação indicando a vitória ou a derrota
 * - Animação ao carregar o resultado
 */
