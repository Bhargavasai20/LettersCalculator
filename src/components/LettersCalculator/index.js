// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div className="container1">
          <div>
            <h1 className="head">Calculate the Letters you enter</h1>
            <div>
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="input"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the phrase"
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="button">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
