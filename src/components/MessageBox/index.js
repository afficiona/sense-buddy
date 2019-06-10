import React from 'react';

class MessageBox extends React.Component {
  render() {
    return (
      <div className="message__wrapper">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default MessageBox;
