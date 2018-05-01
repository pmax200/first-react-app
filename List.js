import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <h2>{this.props.candidates[0].name}</h2>
          <p>Votes: {this.props.candidates[0].votes}</p>
          <button onClick={this.props.addVote.bind(this, "Bob")} >Vote</button>
        </li>

        <li>
          <h2>{this.props.candidates[1].name}</h2>
          <p>Votes: {this.props.candidates[1].votes}</p>
          <button onClick={this.props.addVote.bind(this, "Steve")}>Vote</button>
        </li>

        <li>
          <h2>{this.props.candidates[2].name}</h2>
          <p>Votes: {this.props.candidates[2].votes}</p>
          <button onClick={this.props.addVote.bind(this, "Tom")}>Vote</button>
        </li>
      </ul>
    )
  }
}

export default List
