import React from 'react';

class Reset extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} >Reset</button>
    )
  }
}

export default Reset;
