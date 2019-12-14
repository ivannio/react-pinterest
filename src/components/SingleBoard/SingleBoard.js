import React from 'react';
import PropTypes from 'prop-types';

import boardData from '../../helpers/data/boardsData';
import pinData from '../../helpers/data/pinData';

import pinShape from '../../helpers/propz/pinShape';

import Pins from '../Pins/Pins';


class SingleBoard extends React.Component {
  static propTypes = {
    pins: pinShape.pinShape,
    selectedBoardId: PropTypes.string,
    setSingleBoard: PropTypes.func,
  }

  state = {
    board: {},
    pins: [],
  }

  componentDidMount() {
    const { selectedBoardId } = this.props;
    pinData.getPinsByBoardId(selectedBoardId)
      .then((pins) => {
        this.setState({ pins: pins.data });
      });
    boardData.getBoardById(selectedBoardId)
      .then((request) => {
        this.setState({ board: request.data });
      })
      .catch((error) => console.error(error));
  }

  removeSelectedBoardId = (e) => {
    e.preventDefault();
    const { setSingleBoard } = this.props;
    setSingleBoard(null);
  }

  render() {
    const { board } = this.state;
    const { pins } = this.state;
    // map pins here
    return (<div>
      <button className="btn btn-info" onClick={this.removeSelectedBoardId}>x Close Board View</button>
      <div className="SingleBoard col-8 offset-2">
        <h2>{board.name}</h2>
        <p>{board.description}</p>
        <div className="d-flex flex-wrap">
         {/* {makePins} */}
        </div>
      </div>
    </div>);
  }
}

export default SingleBoard;
