import React from 'react';

import authData from '../../helpers/data/authData';
import boardsData from '../../helpers/data/boardsData';
import Board from '../Board/Board';

class BoardsContainer extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((error) => console.error({ error }));
  }

  render() {
    return (<div className="d-flex justify-content-around">{this.state.boards.map((board) => (<Board key={board.id} board={board}/>))}</div>);
  }
}

export default BoardsContainer;
