import './App.css';
import React from 'react';
import Board from './components/board/Board';
import randomWords from './components/random-words';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      choosedWord: false,
      word: null,
    }
  }

  render() {

    if (this.state.choosedWord) {
      return (
        <div className="App">
          <header className="App-header">
            <Board word={this.state.word}/>
          </header>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h3>Choose your 5 letter word</h3>
          <input type="text" ref={this.inputRef} id="word" name="word" style={{ marginBottom: '8px' }}/>
          <div className='app-home'>
            <button onClick={() => {
              const random = randomWords[Math.floor(Math.random() * randomWords.length)];

              this.setState({
                choosedWord: true,
                word: random
              });
            }}>
              Random
            </button>
            <button 
              onClick={() => 
                this.setState({
                  choosedWord: true,
                  word: this.inputRef.current.value
                })
              }>
                Play
            </button>
          </div>
        </header>
      </div>
    )
  }
}

export default App;

/**
 * TODO:
 * - Tela inicial para escolher a palavra
 * - Tela final com animação indicando a vitória ou a derrota
 * - Animação ao carregar o resultado
 */
