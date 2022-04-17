import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { HEROES, ERA } from "./custom/data";
import { shuffle, move, GAME_STATE, getTotalScore } from "./custom/utils";

import Modal from "./components/Modal";
import Dropzone from "./components/Dropzone";
import PuzzleFooter from "./components/PuzzleFooter";

const initialState = {
  bench: shuffle(HEROES),
  [ERA.OLD]: [],
  [ERA.NEW]: [],
  gameState: GAME_STATE.READY,
  start: false,
};

class Puzzle extends React.Component {
  state = initialState;

  startGame = () => {
    this.setState({
      gameState: GAME_STATE.PLAYING,
    });
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState({
      bench: shuffle(HEROES),
      [ERA.OLD]: [],
      [ERA.NEW]: [],
      gameState: GAME_STATE.PLAYING,
      start: false,
    });
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState((state) => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, timeLeft, bench, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE;

    return (
      <>
        {this.state.gameState === GAME_STATE.PLAYING && (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="container ">
              <div className="columns">
                <Dropzone
                  id={ERA.NEW}
                  heroes={this.state[ERA.NEW]}
                  isDropDisabled={isDropDisabled}
                />
                <Dropzone
                  id="bench"
                  heroes={bench}
                  isDropDisabled={isDropDisabled}
                />
                <Dropzone
                  id={ERA.OLD}
                  heroes={this.state[ERA.OLD]}
                  isDropDisabled={isDropDisabled}
                />
              </div>
            </div>
          </DragDropContext>
        )}

        <PuzzleFooter
          start={this.startGame}
          reset={this.resetGame}
          end={this.endGame}
          groups={groups}
          gameState={gameState}
        />
      </>
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default Puzzle;
