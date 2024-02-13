import React from 'react';
import randomWords from '../random-words';
import './Home.css';

export class Home extends React.Component {
  constructor(props) {
	  super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
					Wordle
					<hr style={{width:'100%', textAlign:'center'}}></hr>
				</header>

          <div>
            <label>Choose your 5 letter word</label>
          </div>

          <div>
            <input type="text" ref={this.inputRef} id="word" name="word" style={{ marginBottom: '8px' }}/>
          </div>

          <div className='home-input'>
            <button onClick={() => {
              const random = randomWords[Math.floor(Math.random() * randomWords.length)];
              this.props.onClick(random);
            }}>
              Random
            </button>

            <button 
              onClick={() => this.props.onClick(this.inputRef.current.value)}>
                Play
            </button>
          </div>
      </div>
    )
  }

}

export default Home;