import React from "react";
import { GAME_STATE, getTotalScore } from "../custom/utils";
import answer from '../assets/images/answer.png';

const PuzzleFooter = ({ start, reset, end, gameState, groups }) => (
  <>
    <div id="game" className="flex justify-evenly py-6">
      {gameState === GAME_STATE.PLAYING && (
        <button className="border py-4 px-8" onClick={() => reset()}>
          Reset
        </button>
      )}
      <button
        className="border py-4 px-8 bg-yellow-500 text-white font-bold text-xl"
        onClick={() => start()}
      >
        Start Game
      </button>
      {gameState === GAME_STATE.PLAYING && (
        <button className="border py-4 px-8" onClick={() => end()}>
          End
        </button>
      )}
    </div>
    <div>
      <div className="text-center font-bold text-2xl mx-auto">
        {gameState === GAME_STATE.DONE && (
          <>
            <p className="text-center font-bold text-2xl ">
              You scored - {getTotalScore(groups)}
            </p>
            <p className="text-center font-bold text-2xl">
              The correct pattern
            </p>
            <img src={answer} alt="Answer" className="mx-auto" />
          </>
        )}
      </div>
    </div>
  </>
);

export default PuzzleFooter;
