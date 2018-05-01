import React, { Component } from 'react';
import List from './List';
import Reset from './Reset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [
        {name: 'Bob', votes: 0},
        {name: 'Steve', votes: 0},
        {name: 'Tom', votes: 0}
      ]
    }
    this.addVote = this.addVote.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  addVote(candidateName) {
    const updatedCandidates = this.state.candidates.map(candidate => {
      if (candidate.name === candidateName) {
        const updatedCandidate = {
          ...candidate,
          votes: candidate.votes + 1
        }
        return updatedCandidate;
      } else {
        return candidate;
      }
    })

    this.setState({
      candidates: [...updatedCandidates]
    });
  }

  resetHandler() {
    this.setState({
      candidates: [
        {name: 'Bob', votes: 0},
        {name: 'Steve', votes: 0},
        {name: 'Tom', votes: 0}
      ]
    })
  }

  render() {
    return (
      <div id="app">
        <h1>Cast Your Votes</h1>
        <List candidates={this.state.candidates} addVote={this.addVote} />
        <Reset onClick={this.resetHandler} />
      </div>
    );
  }
}

export default App;
