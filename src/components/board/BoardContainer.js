import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { boardMod, squareMod, inputMod, archiveUpdatePuzzle } from '../../state/actions';
import Board from './Board';

const mapStateToProps = state => ({
  archive: state.archive,
  board: state.board,
  id: state.board.id,
  numSquares: state.board.numSquares,
  dims: state.board.dims, // {x: width, y: height}
  squares: state.board.squares,
  clues: state.board.clues,
  timer: state.board.timer,
  solved: state.board.solved,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  boardMod: (b) => dispatch(boardMod(b)),
  inputMod: (squareId, newInput) => dispatch(inputMod(squareId, newInput)),
  archiveUpdatePuzzle: (b) => dispatch(archiveUpdatePuzzle(b))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Board));