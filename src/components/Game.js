import React from 'react';

const Game = (props) => (
	<div className="style1">
		<div className="style2">
			<h1 className="header"> mastermind</h1>
			<div className="btn-container"><button className="start" onClick={props.handleStart}>Start</button></div>
		</div>
	</div>
)

export default Game;
