import React, { Component } from 'react';
import axios from 'axios';


class CodeWidget extends Component {
	constructor(props){
		super(props);
		this.state = {
			guess: [],
			randomCode: [],
			attempts: 10,
			feedback: []
		}
		this.handleClick = this.handleClick.bind(this);
		this.Restart = this.Restart.bind(this);
		this.Enter = this.Enter.bind(this);
		this.Delete = this.Delete.bind(this);
		this.Wipe = this.Wipe.bind(this);
	}

	componentDidMount() {
		this.generateCode();

	}

	 generateCode() {
		  axios.get("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new").then((res) => {
        let data = res.data;
				data = data.split("\n");
				data  = data.slice(0, data.length - 1);
				console.log(data);
        this.setState({ randomCode: data });
				console.log(`code generated was: ${this.randomCode}`);
      });
	}

	Restart() {
		this.setState({guess: []});
		this.setState({attempts: 10});
		this.setState({feedback: []});
		this.generateCode();
	}

	Wipe() {
		this.setState({guess: []});
	}

	Enter() {
		const exact = this.exactMatch();
		const near = this.numberNear();

		if(this.state.guess.length < 4) {
			alert('Enter 4 digits!');
		} else if (this.state.randomCode.join('')=== this.state.guess.join('')){
			alert('VIIIICTORY!')
			console.log('You won!')
		} else {
			this.setState({attempts: this.state.attempts -1})
			if(this.state.attempts === 0) {
				alert('You lost, better luck next time...')
				console.log('you lost')
				return;
			}
			this.setState({feedback: this.state.feedback.concat([[this.state.guess, exact, near]])})
			this.Wipe();
			console.log('Go again!');
		}
	}

	handleClick(event) {
		if(this.state.guess.length < 4) {
			this.setState({guess: this.state.guess.concat([event.currentTarget.value])});
		}
	}
	Delete(focus) {
		return (event) => {
			const newState = this.state.guess.filter((num, index) => index !== focus);
			this.setState({guess: newState});
		}
	}
	exactMatch() {
		let matches = 0;
		for (let i = 0; i < this.state.guess.length; ++i) {
			if (this.state.guess[i] === this.state.randomCode[i]) {
				matches++
			}
		}
		return matches;
	}

	numberNear() {
		let correctNumberWrongLocation = 0;
		for (let i = 0; i < this.state.guess.length; ++i){
			const code = this.state.randomCode, currentNumber = this.state.guess[i];
			if (code.includes(currentNumber) && code[i] !== currentNumber) {
				correctNumberWrongLocation++
			}
		}
		return correctNumberWrongLocation;
	}

	render() {
		const focus = this.state.guess.length - 1;

		return (
      <div>
        {this.state.guess.length
          ? this.state.guess
          : " Reckon' you can guess the code? "}
        <div>
          <button onClick={this.handleClick} value="0">
            0
          </button>
          <button onClick={this.handleClick} value="1">
            1
          </button>
          <button onClick={this.handleClick} value="2">
            2
          </button>
        </div>
        <span></span>
        <div>
          <button onClick={this.handleClick} value="3">
            3
          </button>
          <button onClick={this.handleClick} value="4">
            4
          </button>
          <button onClick={this.handleClick} value="5">
            5
          </button>
        </div>
        <span></span>
        <div>
          <button onClick={this.handleClick} value="6">
            6
          </button>
          <button onClick={this.handleClick} value="7">
            7
          </button>
          <button onClick={this.Delete(focus)}>delete</button>
        </div>
        <button onClick={this.Enter}>enter</button>
        <button onClick={this.Wipe}>wipe</button>
        <div> attempts left: {this.state.attempts}</div>

        <div>
          {this.state.feedback
            .slice()
            .reverse()
            .map((arr, index) => (
              <ul key={index}>
                <li>incorrect: {4-arr[1]-arr[2]}</li>
                <li>exact: {arr[1]}</li>
                <li>near: {arr[2]}</li>
              </ul>
            ))}
        </div>
      </div>
    );
	}

}

export default CodeWidget;
