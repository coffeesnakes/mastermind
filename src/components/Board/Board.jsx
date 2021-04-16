import React from "react";
import GuessRow from "../GuessRow/GuessRow";
import styles from "./Board.module.css";

const Board = (props) => (
  <div className={styles.Board}>
    {props.guesses.map((guess, idx) => (
      <GuessRow
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        currentGuess={idx === props.guesses.length - 1}
        handlePegClick={props.handlePegClick}
        handleScoreClick={props.handleScoreClick}
        key={idx}
      />
    ))}
  </div>
);

export default Board;
